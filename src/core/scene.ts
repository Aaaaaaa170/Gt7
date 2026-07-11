import * as THREE from "three";

export class GameScene {
    public scene: THREE.Scene;

    constructor() {
        this.scene = new THREE.Scene();

        this.scene.background =
            new THREE.Color(0x87ceeb);
    }
}
