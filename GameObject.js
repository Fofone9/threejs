import * as THREE from 'three';
class GameObject{
    geometry
    material
    constructor(){
        this.geometry = null
        this.material = null
    }
    setMaterial(material){
        this.material = material
    }
    setGeometry(points){
        const positions = new Float32Array(points.length * 3);
        for (let i = 0; i < points.length; i++) {
            positions[i * 3] = points[i].x;
            positions[i * 3 + 1] = points[i].y;
            positions[i * 3 + 2] = points[i].z;
        }
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
    draw(scene){
        const obj = new THREE.Line(this.geometry, this.material);
        scene.add(obj);
    }
}
export {GameObject}