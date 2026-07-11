import * as THREE from "three";


export class Physics {


    velocity =
        new THREE.Vector3();


    acceleration = 0.02;


    update(
        object:THREE.Object3D,
        forward:boolean,
        backward:boolean
    ){


        if(forward){

            this.velocity.z -=
                this.acceleration;

        }


        if(backward){

            this.velocity.z +=
                this.acceleration;

        }


        this.velocity.multiplyScalar(
            0.96
        );


        object.position.add(
            this.velocity
        );


    }

}
