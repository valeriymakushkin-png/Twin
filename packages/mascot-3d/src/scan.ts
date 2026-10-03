import * as THREE from 'three';
import { HERO_DNA, type MascotDna } from '@mascot/shared';
import { buildHeadGeometry, headParamsFromDna } from './head';

/**
 * "Face analysis" visual: a slowly turning wireframe of the sculpted head (the same geometry the
 * character is built from) in brand red, with hidden lines removed by an invisible occluder.
 */
export class ScanViewer {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  private head = new THREE.Group();
  private raf = 0;
  private start = performance.now();
  private resizeObs?: ResizeObserver;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    dna: MascotDna = HERO_DNA,
    color = '#ff2b3d',
  ) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.setClearColor(0x000000, 0);
    const P = headParamsFromDna(dna);
    const solid = buildHeadGeometry(P, 160, 120);
    const occluder = new THREE.Mesh(solid, new THREE.MeshBasicMaterial({ colorWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
    const wireGeo = new THREE.WireframeGeometry(buildHeadGeometry(P, 44, 32));
    const lines = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 }));
    const glow = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(1.006);
    this.head.add(occluder, lines, glow);
    this.head.rotation.x = 0.08;
    this.scene.add(this.head);
    this.camera.position.set(0, 0.05, 7.4);
    this.camera.lookAt(0, -0.05, 0);
    this.fit();
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObs = new ResizeObserver(() => this.fit());
      this.resizeObs.observe(canvas);
    }
    this.loop();
  }

  private fit() {
    const w = this.canvas.clientWidth || 300;
    const h = this.canvas.clientHeight || 300;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private last = 0;
  private loop = () => {
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    if (now - this.last < 33) return;
    this.last = now;
    const t = (now - this.start) / 1000;
    this.head.rotation.y = Math.sin(t * 0.6) * 0.55;
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    cancelAnimationFrame(this.raf);
    this.resizeObs?.disconnect();
    this.head.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
    });
    this.renderer.dispose();
  }
}
