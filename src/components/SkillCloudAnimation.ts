import "./skillCloudAnimation.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initSkillCloudAnimation() {
  // Create the canvas element dynamically
  const canvasContainer = document.querySelector<HTMLDivElement>(
    "#skill_cloud_container"
  )!;

  // Check if a canvas already exists
  if (canvasContainer.querySelector("canvas")) {
    return; // Exit if a canvas already exists
  }

  const canvas = document.createElement("canvas");
  canvasContainer.appendChild(canvas);

  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a group for icons
  const iconGroup = new THREE.Group();
  scene.add(iconGroup);

  // Set renderer to allow transparency
  renderer.setClearColor(0x000000, 0); // First parameter is the color, second is the opacity (0 is fully transparent)

  // Helper function to create icons
  function createIcon(
    texture: THREE.Texture,
    position: THREE.Vector3
  ): THREE.Mesh {
    const planeGeometry = new THREE.PlaneGeometry(1, 1);
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: texture, // Apply the texture
      transparent: true, // Allow transparency
      side: THREE.DoubleSide, // Render both sides of the plane
    });
    const icon = new THREE.Mesh(planeGeometry, planeMaterial);

    icon.position.set(position.x, position.y, position.z);
    icon.lookAt(camera.position); // Ensure the icon faces the camera
    return icon;
  }

  // Helper function to check distance between two vectors
  function isTooClose(position: THREE.Vector3, minDistance: number): boolean {
    for (const child of iconGroup.children) {
      if (child.position.distanceTo(position) < minDistance) {
        return true;
      }
    }
    return false;
  }

  // Load an example texture for icons
  const loader = new THREE.TextureLoader();
  const minDistance = 1.8; // Slightly reduced minimum distance between icons

  function loadIcon(url: string) {
    loader.load(
      url,
      (texture) => {
        console.log(`Attempting to place icon: ${url}`);
        let position;
        let attempts = 0;
        const MAX_ATTEMPTS = 50;

        do {
          const phi = Math.acos(1 - 2 * Math.random());
          const theta = 2 * Math.PI * Math.random();
          const x = 8 * Math.sin(phi) * Math.cos(theta); // Increased from 7 to 8
          const y = 6 * Math.sin(phi) * Math.sin(theta); // Increased from 5 to 6
          const z = 6 * Math.cos(phi); // Increased from 5 to 6
          position = new THREE.Vector3(x, y, z);
          attempts++;
        } while (isTooClose(position, minDistance) && attempts < MAX_ATTEMPTS);

        if (attempts >= MAX_ATTEMPTS) {
          console.warn(
            `Could not place icon ${url} after ${MAX_ATTEMPTS} attempts - skipping`
          );
          return;
        }

        const icon = createIcon(texture, position);
        iconGroup.add(icon);
        console.log(
          `Successfully placed icon: ${url} after ${attempts} attempts`
        );
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
      }
    );
  }

  // Load all icons
  const icons = [
    "svg/gh.svg",
    "svg/git.svg",
    "svg/php.svg",
    "svg/sass.svg",
    "svg/node.svg",
    "svg/js.svg",
    "svg/ts.svg",
    "svg/html.svg",
    "svg/css.svg",
    "svg/figma.svg",
    "svg/docker.svg",
    "svg/gc.svg",
    "svg/gitlab.svg",
    "svg/mysql.svg",
    "svg/sqlite.svg",
    "svg/heroku.svg",
    "svg/macos.svg",
    "svg/jquery.svg",
    "svg/react.svg",
    "svg/vue.svg",
    "svg/wp.svg",
    "svg/namecheap.svg",
    "svg/windows.svg",
    "svg/trello.svg",
    "svg/shields.svg",
    "svg/npm.svg",
    "svg/vitejs.svg",
    "svg/vsc.svg",
    "svg/tailwindcss.svg",
    "svg/nginx.svg",
    "svg/debian.svg",
    "svg/blender.svg",
    "svg/bash.svg",
    "svg/aws.svg",
    "svg/ubuntu.svg",
    "svg/powershell.svg",
    "svg/threejs.svg",
    "svg/linux.svg",
    "svg/markdown.svg",
    "svg/express.svg",
    "svg/material-ui.svg",
    "svg/neovim.svg",
    "svg/python.svg",
    "svg/svg.svg",
    "svg/mongodb.svg",
    "svg/moleculer.svg",
    "svg/astro.svg",
    "svg/alpinejs.svg",
  ];

  icons.forEach(loadIcon);

  // Position the camera
  camera.position.z = window.innerWidth < 768 ? 11 : 15;

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Disable zoom
  controls.enableZoom = false;

  // Restrict to only horizontal rotation (around the y-axis)
  controls.enableRotate = true; // Allow rotation
  controls.enablePan = false; // Disable panning
  controls.enableZoom = false; // Disable zoom
  controls.minPolarAngle = Math.PI / 2; // Disable vertical rotation (top/bottom)
  controls.maxPolarAngle = Math.PI / 2; // Disable vertical rotation (top/bottom)

  // Optional: Disable panning
  controls.enablePan = false;

  let isAnimating = true;

  // Detect when the user starts or stops interacting with the controls
  controls.addEventListener("start", () => {
    isAnimating = false; // Stop animation when user starts interacting
  });

  controls.addEventListener("end", () => {
    isAnimating = true; // Resume animation when user stops interacting
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the icon group only if animation is enabled
    if (isAnimating) {
      iconGroup.rotation.y += 0.005;
      // iconGroup.rotation.x += 0.003;
    }

    // Make each icon face the camera
    iconGroup.children.forEach((icon) => {
      icon.lookAt(camera.position);
    });

    controls.update(); // Allow controls to work
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", adjustCanvasSize);

  function adjustCanvasSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Adjust renderer and camera for mobile
    if (width < 768) {
      const aspectRatio = 9 / 16; // Aspect ratio for mobile (portrait mode)
      const mobileHeight = width * aspectRatio;
      renderer.setSize(width, mobileHeight);
      camera.aspect = width / mobileHeight;
      camera.position.z = 11; // Adjust camera position for mobile
    } else {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = 15;
    }

    camera.updateProjectionMatrix();
  }

  // Initial adjustment
  adjustCanvasSize();
}
