import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const ORANGE = 0xff6a00;
const ORANGE_DEEP = 0xe65c00;
const NAVY = 0x0b2138;
const CREAM = 0xf4f1ea;

/* Proporciones de un casco de seguridad industrial (EN 397):
   copa ancha y baja, ala perimetral con visera frontal y cresta central. */
const DOME_RADIUS = 1.03;
const DOME_HEIGHT = 0.76;
const DOME_DEPTH = 1.04;
const PROFILE_POWER = 0.5;
const HEIGHT_POWER = 0.82;

/** Radio frontal (eje Z) de la copa a una altura dada, para asentar la cresta y el distintivo. */
function domeRadiusAtHeight(y: number): number {
  const normalized = Math.min(Math.max(y / DOME_HEIGHT, 0), 0.999);
  const angle = Math.asin(Math.pow(normalized, 1 / HEIGHT_POWER));
  return DOME_RADIUS * DOME_DEPTH * Math.pow(Math.cos(angle), PROFILE_POWER);
}

/** Altura de la copa en una posición frontal dada. */
function domeHeightAt(z: number): number {
  const normalized = Math.min(Math.abs(z), DOME_RADIUS * DOME_DEPTH - 0.001) / (DOME_RADIUS * DOME_DEPTH);
  const angle = Math.acos(Math.pow(normalized, 1 / PROFILE_POWER));
  return Math.pow(Math.sin(angle), HEIGHT_POWER) * DOME_HEIGHT;
}

function buildBadgeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "#0B2138";
    context.beginPath();
    context.arc(128, 128, 124, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(244,241,234,0.45)";
    context.lineWidth = 5;
    context.beginPath();
    context.arc(128, 128, 112, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = "#F4F1EA";
    context.lineWidth = 20;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(88, 88);
    context.lineTo(128, 172);
    context.lineTo(168, 88);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export interface HelmetHandle {
  dispose: () => void;
}

/**
 * Monta el casco giratorio dentro de `host`.
 * Devuelve null cuando no hay WebGL disponible para conservar la ilustración de respaldo.
 */
export function mountHelmet(host: HTMLElement, options: { reducedMotion?: boolean } = {}): HelmetHandle | null {
  if (typeof window === "undefined") return null;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    return null;
  }

  const reducedMotion = Boolean(options.reducedMotion);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  Object.assign(renderer.domElement.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    display: "block",
  });
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.7, 5.3);
  camera.lookAt(0, 0.2, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.05);
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.4;

  const root = new THREE.Group();
  root.rotation.y = -0.55;
  root.rotation.x = 0.05;
  scene.add(root);

  const shellGroup = new THREE.Group();
  shellGroup.scale.z = DOME_DEPTH;
  root.add(shellGroup);

  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: ORANGE,
    roughness: 0.38,
    metalness: 0.02,
    clearcoat: 0.65,
    clearcoatRoughness: 0.35,
  });
  const navyMaterial = new THREE.MeshStandardMaterial({ color: NAVY, roughness: 0.55, metalness: 0.06 });
  const crestMaterial = new THREE.MeshStandardMaterial({ color: ORANGE_DEEP, roughness: 0.42, metalness: 0.02 });

  // Copa: perfil girado con hombros anchos y base ligeramente abierta.
  const profilePoints: THREE.Vector2[] = [];
  const segments = 48;
  for (let index = 0; index <= segments; index += 1) {
    const t = index / segments;
    const angle = (t * Math.PI) / 2;
    const radius = Math.pow(Math.cos(angle), PROFILE_POWER) * DOME_RADIUS;
    const height = Math.pow(Math.sin(angle), HEIGHT_POWER) * DOME_HEIGHT;
    profilePoints.push(new THREE.Vector2(Math.max(radius, 0.0015), height));
  }
  const shellGeometry = new THREE.LatheGeometry(profilePoints, 96);
  const shell = new THREE.Mesh(shellGeometry, shellMaterial);
  shell.castShadow = true;
  shell.receiveShadow = true;
  shellGroup.add(shell);

  // Junta fina entre la copa y el ala.
  const rimGeometry = new THREE.TorusGeometry(DOME_RADIUS * 0.995, 0.014, 8, 96);
  const rim = new THREE.Mesh(rimGeometry, navyMaterial);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.072;
  shellGroup.add(rim);

  // Ala perimetral con visera frontal más larga.
  const brimShape = new THREE.Shape();
  const brimSteps = 128;
  for (let index = 0; index <= brimSteps; index += 1) {
    const theta = (index / brimSteps) * Math.PI * 2;
    const front = Math.max(0, Math.sin(theta));
    const radiusX = DOME_RADIUS + 0.1 + 0.02 * Math.pow(front, 2);
    const radiusY = DOME_RADIUS * DOME_DEPTH + 0.09 + 0.3 * Math.pow(front, 2.4);
    const x = Math.cos(theta) * radiusX;
    const y = Math.sin(theta) * radiusY;
    if (index === 0) brimShape.moveTo(x, y);
    else brimShape.lineTo(x, y);
  }
  const brimGeometry = new THREE.ExtrudeGeometry(brimShape, {
    depth: 0.052,
    bevelEnabled: true,
    bevelThickness: 0.018,
    bevelSize: 0.02,
    bevelSegments: 4,
    curveSegments: 14,
  });
  const brim = new THREE.Mesh(brimGeometry, shellMaterial);
  brim.rotation.x = Math.PI / 2;
  brim.position.y = 0.058;
  brim.castShadow = true;
  brim.receiveShadow = true;
  root.add(brim);

  // Cresta central: tubo achatado que recorre la copa de delante a atrás.
  const crestCurvePoints: THREE.Vector3[] = [];
  const crestSteps = 26;
  for (let index = 0; index <= crestSteps; index += 1) {
    const z = 1.0 - (2.0 * index) / crestSteps;
    crestCurvePoints.push(new THREE.Vector3(0, domeHeightAt(z) + 0.012, z));
  }
  const crestCurve = new THREE.CatmullRomCurve3(crestCurvePoints);
  const crestGeometry = new THREE.TubeGeometry(crestCurve, 120, 0.052, 14, false);
  const crest = new THREE.Mesh(crestGeometry, crestMaterial);
  crest.scale.x = 2.4;
  crest.castShadow = true;
  root.add(crest);

  // Distintivo frontal con la "V" de la marca.
  const badgeHeight = 0.31;
  const badgeTexture = buildBadgeTexture();
  const badgeGeometry = new THREE.CircleGeometry(0.125, 48);
  const badgeMaterial = new THREE.MeshStandardMaterial({ map: badgeTexture, roughness: 0.4, metalness: 0.1 });
  const badge = new THREE.Mesh(badgeGeometry, badgeMaterial);
  badge.position.set(0, badgeHeight, domeRadiusAtHeight(badgeHeight) + 0.012);
  const outward = new THREE.Vector3(0, 0.52, 0.86).normalize();
  badge.lookAt(badge.position.clone().add(outward));
  root.add(badge);

  // Sombra de contacto.
  const shadowGeometry = new THREE.PlaneGeometry(7, 7);
  const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.2, color: 0x000000 });
  const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -0.42;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  const keyLight = new THREE.DirectionalLight(0xfff2e2, 2.7);
  keyLight.position.set(3.8, 5.6, 4.2);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 16;
  keyLight.shadow.camera.left = -3;
  keyLight.shadow.camera.right = 3;
  keyLight.shadow.camera.top = 3;
  keyLight.shadow.camera.bottom = -3;
  keyLight.shadow.bias = -0.0008;
  keyLight.shadow.radius = 5;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xff7a1f, 3.2);
  rimLight.position.set(-4.8, 1.4, -3.6);
  scene.add(rimLight);

  const fillLight = new THREE.DirectionalLight(0x5a89bd, 1.25);
  fillLight.position.set(-3.6, 0.4, 3.8);
  scene.add(fillLight);

  scene.add(new THREE.HemisphereLight(0xc9dcff, 0x06121f, 0.5));

  let frame = 0;
  let visible = true;
  const clock = new THREE.Clock();
  let spinVelocity = reducedMotion ? 0 : 0.3;
  let dragging = false;
  let previousX = 0;
  let previousY = 0;
  let tilt = 0.05;

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();
  renderer.render(scene, camera);

  const onPointerDown = (event: PointerEvent) => {
    dragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
    host.setPointerCapture?.(event.pointerId);
    host.classList.add("is-dragging");
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!dragging) return;
    const deltaX = event.clientX - previousX;
    const deltaY = event.clientY - previousY;
    previousX = event.clientX;
    previousY = event.clientY;
    root.rotation.y += deltaX * 0.008;
    tilt = THREE.MathUtils.clamp(tilt + deltaY * 0.0035, -0.32, 0.4);
    spinVelocity = THREE.MathUtils.clamp(deltaX * 0.03, -1.6, 1.6);
  };

  const onPointerUp = (event: PointerEvent) => {
    dragging = false;
    host.releasePointerCapture?.(event.pointerId);
    host.classList.remove("is-dragging");
  };

  host.addEventListener("pointerdown", onPointerDown);
  host.addEventListener("pointermove", onPointerMove);
  host.addEventListener("pointerup", onPointerUp);
  host.addEventListener("pointercancel", onPointerUp);
  host.addEventListener("pointerleave", onPointerUp);

  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    },
    { threshold: 0.05 },
  );
  observer.observe(host);

  const animate = () => {
    frame = requestAnimationFrame(animate);
    if (!visible || document.hidden) return;
    const delta = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;

    if (!dragging) {
      root.rotation.y += spinVelocity * delta;
      if (!reducedMotion) {
        spinVelocity += (0.3 - spinVelocity) * 0.02;
        root.position.y = Math.sin(elapsed * 0.85) * 0.02;
        tilt += (0.05 - tilt) * 0.02;
      }
    }
    root.rotation.x = tilt;
    renderer.render(scene, camera);
  };
  animate();

  return {
    dispose: () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerup", onPointerUp);
      host.removeEventListener("pointercancel", onPointerUp);
      host.removeEventListener("pointerleave", onPointerUp);
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const material = mesh.material;
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
        else if (material) material.dispose();
      });
      badgeTexture.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
