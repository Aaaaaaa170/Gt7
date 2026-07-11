import * as THREE from "three";

export class GameCamera {

    public camera: THREE.PerspectiveCamera;

    constructor() {

        this.camera =
            new THREE.PerspectiveCamera(
                75,
                window.innerWidth /
                window.innerHeight,
                0.1,
                1000
            );


        this.camera.position.set(
            0,
            3,
            6
        );
    }


    resize(){

        this.camera.aspect =
            window.innerWidth /
            window.innerHeight;

        this.camera.updateProjectionMatrix();

    }
}
