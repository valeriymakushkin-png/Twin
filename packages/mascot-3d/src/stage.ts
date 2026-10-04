import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { MascotDna } from '@mascot/shared';
import { prepareEyewear } from './eyewear';
import { buildMascot, type MascotOptions, type MascotRig } from './character';
import { danceFrame, type DanceId } from './dances';
import type { StyleLook } from './styles';

export type Framing = 'hero' | 'bust' | 'portrait' | 'head' | 'sticker' | 'hair';

const FRAMES: Record<Framing, { y: number; dist: number; fov: number }> = {
  // Waist-up: the whole character with arms and gestures.
  hero: { y: -1.1, dist: 15.2, fov: 22 },
  bust: { y: -1.0, dist: 14.6, fov: 22 },
  // Chest-up / sticker: head large, gestures at chest height still in frame.
  portrait: { y: -0.6, dist: 10.6, fov: 22 },
  sticker: { y: -0.85, dist: 12.4, fov: 22 },
  head: { y: 0.05, dist: 7.4, fov: 22 },
  // Head and shoulders with headroom for buns, afros and long hair (hairstyle picker).
  hair: { y: -0.15, dist: 10.2, fov: 22 },
};

export interface StageOptions {
  canvas?: HTMLCanvasElement | OffscreenCanvas;
  width?: number;
  height?: number;
  pixelRatio?: number;
  /** Keep the drawing buffer for toDataURL/convertToBlob snapshots. */
  preserveDrawingBuffer?: boolean;
  shadows?: boolean;
}

/**
 * Scene, lights and camera tuned for a premium dark UI: warm key light, soft fill and a
 * coloured rim (brand red by default) that separates the character from black backgrounds.
 */
export class MascotStage {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(22, 1, 0.1, 100);
  readonly pivot = new THREE.Group();
  private rig: MascotRig | null = null;
  private rimA = new THREE.DirectionalLight('#ff2a3c', 4);
  private rimB = new THREE.DirectionalLight('#ff6a3d', 2.5);
  private key = new THREE.DirectionalLight('#fff4ea', 2.1);
  private fill = new THREE.HemisphereLight('#e6ecff', '#3a1212', 0.42);
  private bounce = new THREE.DirectionalLight('#ffd9cc', 0.55);
  private framing: Framing = 'bust';
  private envTexture: THREE.Texture;

  constructor(opts: StageOptions = {}) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: opts.canvas as HTMLCanvasElement | undefined,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: opts.preserveDrawingBuffer ?? false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(opts.pixelRatio ?? (typeof window !== 'undefined' ? Math.min(2, window.devicePixelRatio || 1) : 1));
    this.renderer.setSize(opts.width ?? 512, opts.height ?? 512, false);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = opts.shadows ?? true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    this.scene.environment = this.envTexture;
    this.scene.environmentIntensity = 0.45;

    this.key.position.set(-6.5, 5, 5.5);
    this.key.castShadow = true;
    this.key.shadow.mapSize.set(1024, 1024);
    this.key.shadow.camera.left = -3.4;
    this.key.shadow.camera.right = 3.4;
    this.key.shadow.camera.top = 3;
    this.key.shadow.camera.bottom = -5.6;
    this.key.shadow.bias = -0.0004;
    this.key.shadow.normalBias = 0.02;
    this.key.shadow.radius = 4;
    // Rims sit well behind the character: they outline the silhouette without tinting the face.
    this.rimA.position.set(4.2, 3.2, -7);
    this.rimB.position.set(-4.2, 1.8, -7);
    this.rimA.target.position.set(0, 0, 0);
    this.rimB.target.position.set(0, -0.5, 0);
    this.bounce.position.set(5, -1, 6);
    this.scene.add(this.bounce, this.key, this.fill, this.rimA, this.rimB, this.rimA.target, this.rimB.target, this.pivot);
    this.setFraming('bust');
  }

  setSize(width: number, height: number) {
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  setFraming(f: Framing) {
    this.framing = f;
    const fr = FRAMES[f];
    this.camera.fov = fr.fov;
    this.camera.position.set(0, fr.y + 0.25, fr.dist);
    this.camera.lookAt(0, fr.y, 0);
    this.camera.updateProjectionMatrix();
  }

  private applyLook(look: StyleLook) {
    this.rimA.color.set(look.rim[0]);
    this.rimB.color.set(look.rim[1]);
    this.rimA.intensity = 3.6 * look.rimIntensity;
    this.rimB.intensity = 2.2 * look.rimIntensity;
    this.key.color.setHSL(0.08, 0.6 * Math.max(0, look.keyWarmth), 0.96 - Math.max(0, -look.keyWarmth) * 0.1);
    if (look.keyWarmth < 0) this.key.color.set('#e8f0ff');
    this.key.intensity = look.shading === 'toon' ? 2.5 : 2.1;
    this.scene.environmentIntensity = look.shading === 'plastic' || look.shading === 'vinyl' ? 0.8 : 0.45;
  }

  setMascot(dna: MascotDna, opts: MascotOptions = {}): MascotRig {
    if (this.rig) {
      this.pivot.remove(this.rig.group);
      this.rig.dispose();
    }
    this.rig = buildMascot(dna, opts);
    this.applyLook(this.rig.look);
    this.pivot.add(this.rig.group);
    return this.rig;
  }

  get mascot(): MascotRig | null {
    return this.rig;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  /** Renders one frame and returns it as a PNG data URL (transparent background). */
  snapshot(dna: MascotDna, opts: MascotOptions & { framing?: Framing; yaw?: number } = {}): string {
    this.setMascot(dna, opts);
    this.setFraming(opts.framing ?? 'bust');
    this.pivot.rotation.y = opts.yaw ?? 0;
    this.render();
    return (this.renderer.domElement as HTMLCanvasElement).toDataURL('image/png');
  }

  /** Same as `snapshot`, as a PNG Blob (works on an OffscreenCanvas inside a Web Worker). */
  async snapshotBlob(dna: MascotDna, opts: MascotOptions & { framing?: Framing; yaw?: number } = {}): Promise<Blob> {
    await prepareEyewear(dna, opts.glasses);
    this.setMascot(dna, opts);
    this.setFraming(opts.framing ?? 'bust');
    this.pivot.rotation.y = opts.yaw ?? 0;
    this.render();
    const canvas = this.renderer.domElement as unknown as OffscreenCanvas | HTMLCanvasElement;
    if ('convertToBlob' in canvas) return canvas.convertToBlob({ type: 'image/png' });
    return new Promise((resolve, reject) => (canvas as HTMLCanvasElement).toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png'));
  }

  dispose() {
    if (this.rig) this.rig.dispose();
    this.envTexture.dispose();
    this.renderer.dispose();
  }

  get currentFraming(): Framing {
    return this.framing;
  }
}

/* ----------------------------- live viewer ----------------------------- */

export interface ViewerOptions extends MascotOptions {
  framing?: Framing;
  autoRotate?: boolean;
  /** Allow dragging to rotate. */
  interactive?: boolean;
  /** Idle animation (breathing, blinking, gaze). */
  idle?: boolean;
}

/** Interactive viewer on a canvas: drag to rotate, idle breathing and blinking. */
export class MascotViewer {
  readonly stage: MascotStage;
  private raf = 0;
  private yaw = 0;
  private targetYaw = 0;
  private dragging = false;
  private lastX = 0;
  private start = performance.now();
  private nextBlink = 1.5;
  private spinUntil = 0;
  private resizeObs?: ResizeObserver;
  private visObs?: IntersectionObserver;
  private visible = true;
  private lastFrame = 0;
  private dirty = true;
  /** Honour "reduce motion": no idle animation, render only on demand. */
  private readonly calm = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    dna: MascotDna,
    private opts: ViewerOptions = {},
  ) {
    this.stage = new MascotStage({ canvas, pixelRatio: typeof window !== 'undefined' ? Math.min(1.75, window.devicePixelRatio || 1) : 1 });
    this.dna = dna;
    this.stage.setMascot(dna, opts);
    this.whenEyewearLoads();
    this.stage.setFraming(opts.framing ?? 'bust');
    this.fit();
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObs = new ResizeObserver(() => this.fit());
      this.resizeObs.observe(canvas);
    }
    if (typeof IntersectionObserver !== 'undefined') {
      // Pause rendering while scrolled out of view (battery on phones).
      this.visObs = new IntersectionObserver(([entry]) => {
        this.visible = Boolean(entry?.isIntersecting);
        this.dirty = true;
      });
      this.visObs.observe(canvas);
    }
    if (opts.interactive !== false) {
      canvas.style.touchAction = 'pan-y';
      canvas.addEventListener('pointerdown', this.onDown);
      window.addEventListener('pointermove', this.onMove);
      window.addEventListener('pointerup', this.onUp);
    }
    this.loop();
  }

  private fit() {
    const w = this.canvas.clientWidth || 512;
    const h = this.canvas.clientHeight || 512;
    this.stage.setSize(w, h);
    this.dirty = true;
  }

  private onDown = (e: PointerEvent) => {
    this.dragging = true;
    this.lastX = e.clientX;
    this.dirty = true;
  };
  private onMove = (e: PointerEvent) => {
    if (!this.dragging) return;
    this.targetYaw += (e.clientX - this.lastX) * 0.012;
    this.lastX = e.clientX;
    this.dirty = true;
  };
  private onUp = () => {
    this.dragging = false;
  };

  update(dna: MascotDna, opts: ViewerOptions) {
    this.opts = { ...this.opts, ...opts };
    this.dna = dna;
    this.stage.setMascot(dna, this.opts);
    this.stage.setFraming(this.opts.framing ?? 'bust');
    this.dirty = true;
    this.whenEyewearLoads();
  }

  private dna: MascotDna | null = null;

  /** A licensed GLB pair finished loading: rebuild once with the real model. */
  private whenEyewearLoads() {
    const dna = this.dna;
    if (!dna) return;
    void prepareEyewear(dna, this.opts.glasses).then((loaded) => {
      if (loaded && dna === this.dna) {
        this.stage.setMascot(dna, this.opts);
        this.dirty = true;
      }
    });
  }

  private dance: DanceId | null = null;
  private danceStart = 0;

  /** Starts a dance loop (null stops and returns to the emotion pose). */
  setDance(id: DanceId | null) {
    this.dance = id;
    this.danceStart = performance.now();
    if (!id) {
      this.stage.mascot?.applyDance(null);
      if (this.stage.mascot) this.stage.mascot.group.position.y = 0;
    }
    this.dirty = true;
  }

  /** One full turn (the "Rotate" button). */
  spin() {
    this.spinUntil = performance.now() + 2200;
    this.targetYaw = this.yaw + Math.PI * 2;
  }

  private loop = () => {
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    const moving = this.dragging || now < this.spinUntil || Math.abs(this.targetYaw - this.yaw) > 0.002;
    // A dance is user-initiated, so it plays even with reduced motion.
    const animate = (!this.calm && this.opts.idle !== false) || this.dance !== null;
    if (!this.visible || (!animate && !moving && !this.dirty)) return;
    // 30 fps cap for the idle loop; interaction runs at display rate.
    if (!moving && !this.dirty && now - this.lastFrame < 33) return;
    this.lastFrame = now;
    this.dirty = false;
    const t = (now - this.start) / 1000;
    const rig = this.stage.mascot;
    if (!this.calm && !this.dragging && now > this.spinUntil && this.opts.autoRotate !== false) {
      // Gentle sway towards a resting three-quarter view.
      this.targetYaw += (Math.sin(t * 0.45) * 0.32 - this.targetYaw) * 0.02;
    }
    this.yaw += (this.targetYaw - this.yaw) * (performance.now() < this.spinUntil ? 0.06 : 0.12);
    if (performance.now() > this.spinUntil && Math.abs(this.yaw) > Math.PI) {
      const k = Math.round(this.yaw / (Math.PI * 2)) * Math.PI * 2;
      this.yaw -= k;
      this.targetYaw -= k;
    }
    this.stage.pivot.rotation.y = this.yaw;
    if (rig && this.dance) {
      const frame = danceFrame(this.dance, (now - this.danceStart) / 1000);
      rig.applyDance(frame);
      rig.group.position.y = frame.bob;
    } else if (rig && animate) {
      rig.group.position.y = Math.sin(t * 1.6) * 0.025;
      rig.head.rotation.y = Math.sin(t * 0.7) * 0.06;
      if (t > this.nextBlink) {
        const k = (t - this.nextBlink) / 0.16;
        rig.setBlink(k < 1 ? Math.sin(k * Math.PI) : 0);
        if (k >= 1) this.nextBlink = t + 2.5 + Math.random() * 3;
      }
    }
    this.stage.render();
  };

  dispose() {
    cancelAnimationFrame(this.raf);
    this.resizeObs?.disconnect();
    this.visObs?.disconnect();
    this.canvas.removeEventListener('pointerdown', this.onDown);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);
    this.stage.dispose();
  }
}
