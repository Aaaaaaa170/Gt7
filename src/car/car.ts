import * as THREE from "three";
import { Controls } from "./Controls";
import { Physics } from "./Physics";
import { Engine } from "./Engine";


export class Car {


    mesh:THREE.Mesh;

    controls:Controls;

    physics:Physics;

    engine:Engine;



    constructor(){


        this.mesh =
            new THREE.Mesh(

                new THREE.BoxGeometry(
                    1.8,
                    0.6,
                    4
                ),


                new THREE.MeshStandardMaterial({
                    color:0xff0000
                })

            );


        this.mesh.position.y =
            0.3;



        this.controls =
            new Controls();


        this.physics =
            new Physics();


        this.engine =
            new Engine();

    }



    update(){


        this.physics.update(
            this.mesh,
            this.controls.forward,
            this.controls.backward
        );


        if(this.controls.left){

            this.mesh.rotation.y +=0.03;

        }


        if(this.controls.right){

            this.mesh.rotation.y -=0.03;

        }


        this.engine.update(
            this.physics.velocity.length()
        );


    }


}
