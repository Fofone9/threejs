import * as THREE from 'three';
import {init, scene, camera} from './data.js'
// Создаем рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
init()
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Обновляем размер рендерера
    renderer.setSize(width, height);

    // Обновляем параметры камеры
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();