import * as THREE from "three";

export class Wheel {

    mesh: THREE.Mesh;


    constructor(){

        this.mesh =
            new THREE.Mesh(

                new THREE.CylinderGeometry(
                    0.35,
                    0.35,
                    0.25,
                    32
                ),

                new THREE.MeshStandardMaterial({
                    color:0x111111
                })

            );


        // タイヤを横向きにする

        this.mesh.rotation.z =
            Math.PI / 2;


    }


    rotate(speed:number){

        this.mesh.rotation.x -=
            speed * 0.1;

    }

}
