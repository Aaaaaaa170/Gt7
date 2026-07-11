import * as THREE from "three";


export class Track {


    mesh:THREE.Mesh;


    constructor(){


        this.mesh =
            new THREE.Mesh(

                new THREE.PlaneGeometry(
                    20,
                    200
                ),


                new THREE.MeshStandardMaterial({
                    color:0x333333
                })

            );


        this.mesh.rotation.x =
            -Math.PI / 2;


        this.mesh.position.y =
            0.01;


    }

}
