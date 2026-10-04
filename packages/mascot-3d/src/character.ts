import * as THREE from 'three';
import { EYE_COLOR_HEX, HAIR_COLOR_HEX, SKIN_TONE_HEX, type MascotDna } from '@mascot/shared';
import { buildAccessory, buildGlasses, type AccessoryKey } from './accessories';
import { bodyCollider, buildBody, type OutfitKey } from './body';
import { buildBrows } from './brows';
import { expressionFor, type Emotion, type Expression } from './expressions';
import { FacePainter, paintEyeTexture } from './face';
import { buildFacialHair, buildHair, strandTexture } from './hair';
import { buildHeadGeometry, FrontMap, headParamsFromDna, type HeadParams } from './head';
import { material, outlineMaterial } from './materials';
import { hashString, lerp, shade } from './math';
import { buildProps } from './props';
import { styleLook, type StyleLook } from './styles';

export interface MascotOptions {
  style?: string;
  emotion?: Emotion;
  outfit?: OutfitKey | string;
  outfitColor?: string;
  accessory?: AccessoryKey | string | null;
}

interface EyeRig {
  lidTilt: THREE.Group;
  upper: THREE.Object3D;
  lower: THREE.Object3D;
  ball: THREE.Object3D;
  side: 1 | -1;
}

export interface MascotRig {
  group: THREE.Group;
  head: THREE.Group;
  look: StyleLook;
  expression: Expression;
  params: HeadParams;
  /** Sets eyelid closure 0..1 on top of the expression (blinks). */
  setBlink(amount: number): void;
  /** Points the eyes (radians). */
  setGaze(yaw: number, pitch: number): void;
  dispose(): void;
}

/** Monk-scale tones re-graded for rendering: same order, richer peach/umber so light skin never reads as plaster. */
const RENDER_SKIN: Record<string, string> = {
  'mst-1': '#f4d5c0',
  'mst-2': '#efc8ac',
  'mst-3': '#e6b593',
  'mst-4': '#d69e78',
  'mst-5': '#bf845f',
  'mst-6': '#a26a47',
  'mst-7': '#86533a',
  'mst-8': '#6a3f2c',
  'mst-9': '#4e2e21',
  'mst-10': '#36221b',
};

const OUTFITS = new Set<OutfitKey>(['casual-hoodie', 'tshirt', 'denim-jacket', 'streetwear', 'business-suit', 'gamer', 'streamer', 'astronaut', 'superhero', 'samurai', 'wizard', 'techwear']);

/** Assembles a full DNA-driven character. Pure scene-graph construction (no renderer needed). */
export function buildMascot(dna: MascotDna, opts: MascotOptions = {}): MascotRig {
  const look = styleLook(opts.style);
  const expr = expressionFor(opts.emotion ?? 'happy');
  const seed = hashString(JSON.stringify(dna));
  const skin = look.skinOverride ?? RENDER_SKIN[dna.skinTone] ?? SKIN_TONE_HEX[dna.skinTone];
  const hairHex = HAIR_COLOR_HEX[dna.hairColor];
  const P = headParamsFromDna(dna, {
    boxy: look.boxy,
    noseTip: headParamsFromDna(dna).noseTip * look.noseScale,
    noseBridge: headParamsFromDna(dna).noseBridge * look.noseScale,
    noseWidth: headParamsFromDna(dna).noseWidth * Math.max(0.6, look.noseScale),
    ...(look.face === 'dots' ? { jaw: 1, chin: 0, cheek: 0, forehead: 1, width: 0.92, height: 1.02 } : {}),
    ...(look.face === 'button' ? { width: 1, height: 0.98, jaw: 0.92, chin: 0.1 } : {}),
  });

  const root = new THREE.Group();
  root.name = 'mascot';
  const head = new THREE.Group();
  head.name = 'head';
  root.add(head);

  // Head surface + painted face.
  const headGeo = buildHeadGeometry(P);
  const map = new FrontMap(headGeo);
  const painter = new FacePainter(map, P);
  const faceTex = painter.paint(dna, skin, look, expr, seed);
  const skinMat = material(look, 'skin', { color: '#ffffff', map: faceTex });
  const headMesh = new THREE.Mesh(headGeo, skinMat);
  headMesh.castShadow = true;
  headMesh.receiveShadow = true;
  headMesh.name = 'head-skin';
  headMesh.userData.outline = true;
  head.add(headMesh);

  // Ears.
  const earY = P.eyeY - 0.14;
  const earX = map.halfWidth(earY) - 0.05;
  const earMat = material(look, 'skin', { color: shade(skin, -0.03) });
  const innerMat = material(look, 'skin', { color: shade(skin, -0.2) });
  if (look.face !== 'dots') {
    for (const s of [-1, 1]) {
      const ear = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), earMat);
      outer.scale.set(0.09, 0.25, 0.165);
      const inner = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), innerMat);
      inner.scale.set(0.05, 0.16, 0.095);
      inner.position.set(s * 0.05, -0.01, 0.035);
      // Lobe.
      const lobe = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), earMat);
      lobe.scale.set(0.07, 0.08, 0.08);
      lobe.position.set(s * 0.01, -0.2, 0.02);
      ear.add(outer, inner, lobe);
      ear.position.set(s * (earX + 0.02), earY, -0.04);
      ear.rotation.y = s * 0.42;
      ear.rotation.z = s * -0.08;
      outer.castShadow = true;
      head.add(ear);
    }
  }

  // Eyes.
  const eyeR = 0.19 * look.eyeScale * (look.face === 'button' ? 1.05 : 1);
  const eyeX = P.eyeX * (look.eyeScale > 1 ? 1 + (look.eyeScale - 1) * 0.3 : 1);
  const eyeTex = paintEyeTexture(EYE_COLOR_HEX[dna.eyeColor], {
    heart: expr.heartEyes,
    dots: look.face === 'dots',
    button: look.face === 'button',
    irisScale: look.shading === 'toon' ? 1.12 : 1,
  });
  const eyeMat = look.face === 'dots' ? material(look, 'gloss', { color: '#111111', roughness: 0.2 }) : material(look, 'eye', { color: '#ffffff', map: eyeTex });
  const lidMat = material(look, 'lid', { color: shade(skin, -0.05) });
  const lashMat = material(look, 'gloss', { color: shade(hairHex, -0.6), roughness: 0.4 });
  const feminine = dna.presentation === 'feminine';
  const shapeLid =
    dna.eyeShape === 'hooded' ? 0.32 : dna.eyeShape === 'monolid' ? 0.36 : dna.eyeShape === 'almond' ? 0.12 : dna.eyeShape === 'round' ? 0.02 : dna.eyeShape === 'deep-set' ? 0.22 : 0.12;
  const shapeTilt = dna.eyeShape === 'upturned' ? 0.14 : dna.eyeShape === 'downturned' ? -0.14 : 0;
  const eyes: EyeRig[] = [];
  for (const s of [-1, 1] as const) {
    const ex = s * eyeX;
    const sz = map.surfaceZ(ex, P.eyeY);
    const eye = new THREE.Group();
    eye.position.set(ex, P.eyeY, sz - eyeR * (look.face === 'dots' ? 0.8 : 0.42));
    head.add(eye);

    if (look.face === 'dots') {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 0.62, 24, 16), eyeMat);
      dot.scale.set(0.8, 1.05, 0.45);
      eye.add(dot);
      continue;
    }
    const ball = new THREE.Mesh(new THREE.SphereGeometry(eyeR, 48, 32), eyeMat);
    ball.receiveShadow = true;
    eye.add(ball);
    // Catch-light (Pixar sparkle).
    const glint = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 0.13, 12, 8), material(look, 'emissive', { color: '#ffffff' }));
    glint.position.set(-eyeR * 0.32, eyeR * 0.36, eyeR * 0.93);
    eye.add(glint);
    const glint2 = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 0.06, 8, 6), material(look, 'emissive', { color: '#ffffff', opacity: 0.8 }));
    glint2.position.set(eyeR * 0.28, -eyeR * 0.25, eyeR * 0.96);
    eye.add(glint2);

    if (look.face === 'button') {
      eyes.push({ lidTilt: new THREE.Group(), upper: new THREE.Group(), lower: new THREE.Group(), ball, side: s });
      continue;
    }
    const lidTilt = new THREE.Group();
    eye.add(lidTilt);
    const upper = new THREE.Group();
    const upperShell = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 1.07, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2), lidMat);
    upperShell.castShadow = true;
    upper.add(upperShell);
    const lash = new THREE.Mesh(new THREE.TorusGeometry(eyeR * 1.075, eyeR * (feminine ? 0.085 : 0.06), 8, 48, Math.PI), lashMat);
    lash.rotation.x = Math.PI / 2;
    upper.add(lash);
    if (feminine) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(eyeR * 0.08, eyeR * 0.4, 8), lashMat);
      wing.position.set(s * eyeR * 1.05, eyeR * 0.08, eyeR * 0.15);
      wing.rotation.z = s * -1.1;
      upper.add(wing);
    }
    lidTilt.add(upper);
    const lower = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 1.055, 48, 24, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), lidMat);
    lidTilt.add(lower);
    if (expr.upperLid >= 0.85) {
      // Closed eyes read as lash arcs: ^ ^ when laughing, ‿ when resigned.
      const up = expr.mouth === 'laugh' || expr.mouth === 'grin' ? 1 : -0.6;
      const arc = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-eyeR * 0.95, -eyeR * 0.05, eyeR * 0.72),
        new THREE.Vector3(0, eyeR * (0.05 + 0.5 * up), eyeR * 1.32),
        new THREE.Vector3(eyeR * 0.95, -eyeR * 0.05, eyeR * 0.72),
      );
      lidTilt.add(new THREE.Mesh(new THREE.TubeGeometry(arc, 24, eyeR * 0.075, 8, false), lashMat));
    }
    eyes.push({ lidTilt, upper, lower, ball, side: s });
  }

  let blink = 0;
  const applyLids = () => {
    for (const e of eyes) {
      const upperAmt = Math.min(1, Math.max(expr.upperLid, shapeLid * (1 - expr.upperLid * 0.5)) + blink * (1 - expr.upperLid));
      e.upper.rotation.x = lerp(-1.0, 1.62, upperAmt);
      e.lower.rotation.x = lerp(0.95, -1.05, Math.min(1, expr.lowerLid + blink * 0.2));
      e.lidTilt.rotation.z = e.side * (expr.lidTilt + shapeTilt);
    }
  };
  applyLids();
  const setGaze = (yaw: number, pitch: number) => {
    for (const e of eyes) {
      e.ball.rotation.y = yaw;
      e.ball.rotation.x = -pitch;
    }
  };
  setGaze(expr.gaze[0], expr.gaze[1]);

  // Hair.
  const strands = look.shading === 'pbr' ? strandTexture() : undefined;
  const hairMat = material(look, 'hair', { color: look.shading === 'plastic' ? shade(hairHex, 0.05) : hairHex, map: strands, bumpMap: strands });
  const hair = buildHair(look.face === 'dots' ? 'crew-cut' : dna.hairStyle, P, hairMat, seed, look.hairDetail, look.face === 'dots', bodyCollider(opts.outfit));
  head.add(hair.group);
  if (look.face === 'full') {
    const browHex = dna.hairStyle === 'bald' ? shade(hairHex, -0.2) : shade(hairHex, -0.3);
    const browMat = material(look, 'hair', { color: browHex, roughness: 0.6, side: THREE.DoubleSide });
    head.add(buildBrows(dna, expr, look, map, P, browMat));
    const beard = buildFacialHair(dna.facialHair, P, hairMat, seed, (x, y) => map.surfaceZ(x, y) || 0.85);
    if (beard) head.add(beard);
  }

  // Glasses (DNA) or sunglasses (expression / accessory).
  const accessory = (opts.accessory ?? null) as AccessoryKey | null;
  const glassesKind = expr.sunglasses || accessory === 'sunglasses' ? 'sunglasses' : dna.glasses;
  if (glassesKind !== 'none' && look.face === 'full') head.add(buildGlasses(glassesKind, look, map, P, eyeR, eyeX));
  if (glassesKind === 'sunglasses' && look.face !== 'full') head.add(buildGlasses('sunglasses', look, map, P, eyeR, eyeX));

  if (accessory && accessory !== 'sunglasses' && accessory !== 'chain') head.add(buildAccessory(accessory, look, map, P, hair.crown));
  if (look.extra === 'stud') {
    const stud = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.22, 40), skinMat.clone());
    (stud.material as THREE.MeshPhysicalMaterial).map = null;
    (stud.material as THREE.MeshPhysicalMaterial).color = new THREE.Color(skin);
    stud.position.set(0, 1.08 * P.height, 0);
    head.add(stud);
  }
  if (look.extra === 'neon') {
    const visor = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 8, 24), material(look, 'emissive', { color: look.rim[1] }));
    visor.position.set(map.halfWidth(P.eyeY) + 0.02, P.eyeY - 0.05, 0.1);
    visor.rotation.y = Math.PI / 2;
    head.add(visor);
  }

  // Props & hands.
  root.add(buildProps(expr, look, map, P, eyeR));

  // Body.
  const outfit = (OUTFITS.has(opts.outfit as OutfitKey) ? opts.outfit : 'casual-hoodie') as OutfitKey;
  const body = buildBody({ outfit, color: opts.outfitColor, skin, look, pose: expr.pose });
  root.add(body.group);
  if (accessory === 'chain') root.add(buildAccessory('chain', look, map, P, hair.crown, undefined, body.surfaceZ));
  if (outfit === 'streamer' && !accessory) head.add(buildAccessory('headphones', look, map, P, hair.crown));
  if (outfit === 'wizard') {
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.5, 48, 1, true), material(look, 'fabric', { color: '#4c1d95', side: THREE.DoubleSide }));
    hat.position.set(0, 1.55 * P.height + hair.crown, -0.05);
    hat.rotation.z = 0.12;
    const brim = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.08, 12, 64), material(look, 'fabric', { color: '#3b0f7a' }));
    brim.rotation.x = Math.PI / 2;
    brim.position.set(0, 0.85 * P.height + hair.crown, -0.05);
    brim.scale.set(1.1, 1, 1);
    head.add(hat, brim);
  }

  if (look.shading === 'toon') {
    // Toon ramps + shadow maps band badly on faces; toon styles rely on the ramp alone.
    root.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) o.receiveShadow = false;
    });
  }

  // Head pose.
  head.rotation.z = expr.headTilt;
  head.rotation.x = expr.headNod;

  // Toon outline (inverted hull) for ink styles.
  if (look.outline > 0) {
    const ink = outlineMaterial(look.outline);
    const targets: THREE.Mesh[] = [];
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh && o.userData.outline) targets.push(m);
    });
    for (const m of targets) {
      const inst = m as THREE.InstancedMesh;
      const hull = inst.isInstancedMesh ? new THREE.InstancedMesh(m.geometry, ink, inst.count) : new THREE.Mesh(m.geometry, ink);
      if (inst.isInstancedMesh) (hull as THREE.InstancedMesh).instanceMatrix = inst.instanceMatrix;
      hull.name = 'outline';
      m.add(hull);
    }
  }

  return {
    group: root,
    head,
    look,
    expression: expr,
    params: P,
    setBlink(amount: number) {
      blink = amount;
      applyLids();
    },
    setGaze,
    dispose() {
      root.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        if (!m.geometry.userData.shared) m.geometry.dispose();
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        for (const mat of mats) {
          for (const v of Object.values(mat)) if (v instanceof THREE.Texture) v.dispose();
          mat.dispose();
        }
      });
    },
  };
}
