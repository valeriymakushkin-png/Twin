import * as THREE from 'three';
import { HERO_DNA, type MascotDna } from '@mascot/shared';
import { buildHeadGeometry, FrontMap, headParamsFromDna, sculpt, type HeadParams } from './head';

/** Face-space landmarks (like a face tracker's key points), in head units. */
function landmarks(P: HeadParams): Array<[number, number]> {
  const tipY = -0.24 * P.noseLength;
  const pts: Array<[number, number]> = [
    [0, tipY],
    [0, P.eyeY + 0.02],
    [0, P.mouthY + 0.06],
    [0, P.mouthY - 0.07],
    [0, -0.97 * P.height],
  ];
  for (const s of [-1, 1]) {
    pts.push(
      [s * (P.eyeX - 0.13), P.eyeY],
      [s * (P.eyeX + 0.13), P.eyeY + 0.01],
      [s * (P.eyeX - 0.12), P.eyeY + 0.25],
      [s * (P.eyeX + 0.14), P.eyeY + 0.22],
      [s * 0.09, tipY + 0.02],
      [s * 0.21, P.mouthY],
      [s * 0.62 * P.width, -0.12],
      [s * 0.58 * P.width, -0.72 * P.height],
    );
  }
  return pts;
}

/**
 * "Face analysis" visual: a slowly turning, triangulated wireframe of the sculpted head (the
 * same geometry the character is built from) in brand red, hidden lines removed by an
 * invisible occluder, with traced eye/lip contours and pulsing landmark points.
 */
export class ScanViewer {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  private head = new THREE.Group();
  private dots: THREE.Mesh[] = [];
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
    const map = new FrontMap(solid);

    // Occluder slightly inside the wire so every visible edge stays in front of it.
    const occluder = new THREE.Mesh(solid, new THREE.MeshBasicMaterial({ colorWrite: false }));
    occluder.scale.setScalar(0.985);

    // Uniform triangles (icosphere) read as a scanned mesh rather than a lat/long balloon.
    const ico = new THREE.IcosahedronGeometry(1, 13);
    const pos = ico.attributes.position as THREE.BufferAttribute;
    const d = new THREE.Vector3();
    const out = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      d.fromBufferAttribute(pos, i).normalize();
      sculpt(d, P, out);
      pos.setXYZ(i, out.x, out.y, out.z);
    }
    const wireGeo = new THREE.WireframeGeometry(ico);
    ico.dispose();
    const lines = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 }));
    const glow = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(1.004);
    this.head.add(occluder, lines, glow);

    // Traced contours: eyes and lips, lifted just off the surface.
    const bright = new THREE.LineBasicMaterial({ color: '#ff8a94', transparent: true, opacity: 0.95 });
    const contour = (cx: number, cy: number, rx: number, ry: number) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        const x = cx + Math.cos(a) * rx;
        const y = cy + Math.sin(a) * ry;
        const hit = map.hit(x, y);
        if (hit) pts.push(hit.position.clone().addScaledVector(hit.normal, 0.012));
      }
      if (pts.length > 8) this.head.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), bright));
    };
    for (const s of [-1, 1]) contour(s * P.eyeX, P.eyeY, 0.15, 0.085);
    contour(0, P.mouthY, 0.22, 0.07);

    // Landmark points with additive halos.
    const dotMat = new THREE.MeshBasicMaterial({ color: '#ffe3e6', toneMapped: false });
    const haloGeo = new THREE.SphereGeometry(0.05, 12, 8);
    const dotGeo = new THREE.SphereGeometry(0.018, 10, 8);
    for (const [x, y] of landmarks(P)) {
      const hit = map.hit(x, y);
      if (!hit) continue;
      const p = hit.position.clone().addScaledVector(hit.normal, 0.015);
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(p);
      const halo = new THREE.Mesh(haloGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false }));
      halo.position.copy(p);
      this.dots.push(halo);
      this.head.add(dot, halo);
    }

    this.head.rotation.x = 0.06;
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
    this.head.rotation.y = 0.25 + Math.sin(t * 0.6) * 0.5;
    this.dots.forEach((h, i) => ((h.material as THREE.MeshBasicMaterial).opacity = 0.25 + 0.3 * (0.5 + 0.5 * Math.sin(t * 3 + i * 1.7))));
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
