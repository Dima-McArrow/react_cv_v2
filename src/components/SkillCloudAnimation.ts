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
  const minDistance = 2; // Minimum distance between icons

  function loadIcon(url: string) {
    loader.load(
      url,
      (texture) => {
        console.log("Texture loaded");
        let position;
        do {
          const phi = Math.acos(1 - 2 * Math.random()); // Random latitude
          const theta = 2 * Math.PI * Math.random(); // Random longitude
          const x = 7 * Math.sin(phi) * Math.cos(theta);
          const y = 5 * Math.sin(phi) * Math.sin(theta);
          const z = 5 * Math.cos(phi);
          position = new THREE.Vector3(x, y, z);
        } while (isTooClose(position, minDistance));

        const icon = createIcon(texture, position);
        iconGroup.add(icon);
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
      }
    );
  }

  // Load all icons
  const icons = [
    "/src/svg/gh.svg",
    "/src/svg/git.svg",
    "/src/svg/php.svg",
    "/src/svg/sass.svg",
    "/src/svg/node.svg",
    "/src/svg/js.svg",
    "/src/svg/ts.svg",
    "/src/svg/html.svg",
    "/src/svg/css.svg",
    "/src/svg/figma.svg",
    "/src/svg/docker.svg",
    "/src/svg/gc.svg",
    "/src/svg/gitlab.svg",
    "/src/svg/mysql.svg",
    "/src/svg/sqlite.svg",
    "/src/svg/heroku.svg",
    "/src/svg/macos.svg",
    "/src/svg/jquery.svg",
    "/src/svg/react.svg",
    "/src/svg/vue.svg",
    "/src/svg/wp.svg",
    "/src/svg/namecheap.svg",
    "/src/svg/windows.svg",
    "/src/svg/trello.svg",
    "/src/svg/shields.svg",
    "/src/svg/npm.svg",
    "/src/svg/vitejs.svg",
    "/src/svg/vsc.svg",
    "/src/svg/tailwindcss.svg",
    "/src/svg/nginx.svg",
    "/src/svg/debian.svg",
    "/src/svg/blender.svg",
    "/src/svg/bash.svg",
    "/src/svg/aws.svg",
    "/src/svg/ubuntu.svg",
    "/src/svg/powershell.svg",
    "/src/svg/threejs.svg",
    "/src/svg/linux.svg",
    "/src/svg/markdown.svg",
    "/src/svg/express.svg",
    "/src/svg/material-ui.svg",
    "/src/svg/neovim.svg",
    "/src/svg/python.svg",
  ];

  icons.forEach(loadIcon);

  // Position the camera
  camera.position.z = 15;

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

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
