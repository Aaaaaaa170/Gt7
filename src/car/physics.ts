import * as THREE from "three";


export class Physics {


    velocity =
        new THREE.Vector3();


    speed = 0;


    acceleration = 0.015;


    maxSpeed = 1.5;


    grip = 0.92;



    update(
        car:THREE.Object3D,
        throttle:boolean,
        brake:boolean,
        steer:number
    ){


        // アクセル

        if(throttle){

            this.speed +=
                this.acceleration;

        }



        // ブレーキ

        if(brake){

            this.speed -=
                this.acceleration * 2;

        }



        // 最高速

        if(this.speed > this.maxSpeed){

            this.speed =
                this.maxSpeed;

        }



        // 後退制限

        if(this.speed < -0.5){

            this.speed =
                -0.5;

        }



        // 摩擦

        this.speed *=
            this.grip;



        // ステアリング

        car.rotation.y -=
            steer *
            this.speed *
            0.03;



        // 前方向へ移動

        const direction =
            new THREE.Vector3(
                0,
                0,
                -1
            );


        direction.applyQuaternion(
            car.quaternion
        );


        this.velocity =
            direction.multiplyScalar(
                this.speed
            );


        car.position.add(
            this.velocity
        );


    }

}
