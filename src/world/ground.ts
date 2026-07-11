import * as THREE from "three";

export class Ground {

    mesh: THREE.Mesh;


    constructor(){

        this.mesh =
            new THREE.Mesh(

                new THREE.PlaneGeometry(
                    500,
                    500
                ),

                new THREE.MeshStandardMaterial({
                    color:0x2f7d32
                })

            );


        this.mesh.rotation.x =
            -Math.PI / 2;

    }

}
