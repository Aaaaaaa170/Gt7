import * as THREE from "three";


export class WorldLight {


    constructor(
        scene:THREE.Scene
    ){


        const ambient =
            new THREE.HemisphereLight(
                0xffffff,
                0x555555,
                2
            );


        scene.add(ambient);



        const sun =
            new THREE.DirectionalLight(
                0xffffff,
                2
            );


        sun.position.set(
            50,
            100,
            50
        );


        scene.add(sun);

    }

}
