import * as THREE from "three";

export class Renderer {
    public renderer: THREE.WebGLRenderer;

    constructor() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        document.body.appendChild(this.renderer.domElement);
    }

    resize() {
        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }

    render(
        scene: THREE.Scene,
        camera: THREE.Camera
    ) {
        this.renderer.render(scene, camera);
    }
}
