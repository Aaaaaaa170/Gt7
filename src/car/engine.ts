export class Engine {

    power:number;
    rpm:number;


    constructor(){

        this.power = 200;
        this.rpm = 1000;

    }


    update(speed:number){

        this.rpm =
            1000 +
            Math.abs(speed) * 300;

    }

}
