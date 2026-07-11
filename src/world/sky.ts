import * as THREE from "three";


export class Sky {


    constructor(
        scene:THREE.Scene
    ){

        scene.background =
            new THREE.Color(
                0x87ceeb
            );

    }

}
