import * as THREE from 'three';
import { GameObject } from './GameObject';
import { color } from 'three/webgpu';
let camera
let scene
function init(){
    // Создаем камеру
     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 1, 50);  // Устанавливаем камеру подальше
    camera.lookAt(0, 0, 0);
     scene = new THREE.Scene();
    const gObj = new GameObject()
    const points = [
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(0, 10, 0),
        new THREE.Vector3(10, 0, 0)
    ];
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    gObj.setGeometry(points)
    gObj.setMaterial(material)
    gObj.draw(scene)
    // const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})
    // const cubeGeometry = new THREE.BoxGeometry( 10, 10, 10 );
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // cube.rotateX(0.3)
    // cube.rotateY(0.3)
    // scene.add(cube)
}
export {init, camera,scene}