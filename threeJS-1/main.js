import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('black')


// 2. Create the camera
const camera = new THREE.PerspectiveCamera(75, globalThis.innerWidth / globalThis.innerHeight, 0.1, 1000)
camera.position.z = 5

// 3. Create the Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color:'#468585', emissive: '#468585'});
const dedecahedron = new THREE.Mesh(geometry,material);

const boxGeometry = new THREE.BoxGeometry(2,0.2,2);
const boxMaterial = new THREE.MeshStandardMaterial({color:'#B4B4B3', emissive: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
box.position.y = -1.5;

scene.add(dedecahedron);
scene.add(box);


// 4. Light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
renderer.setPixelRatio(globalThis.devicePixelRatio);

// 6. Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Add Animations 
function animate() {
  requestAnimationFrame(animate);

  dedecahedron.rotation.x += 0.01;
  dedecahedron.rotation.y += 0.01;
  
  box.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

// Handling Window Resizing 
globalThis.addEventListener('resize', () => {
  camera.aspect = globalThis.innerWidth / globalThis.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
})

animate();