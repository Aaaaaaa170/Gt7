export class Engine {

    horsepower:number;

    rpm:number;

    maxRPM:number;


    constructor(){

        this.horsepower = 300;

        this.rpm = 1000;

        this.maxRPM = 8000;

    }



    update(
        speed:number
    ){

        this.rpm =
            1000 +
            speed * 250;


        if(this.rpm > this.maxRPM){

            this.rpm =
                this.maxRPM;

        }


    }



    power(){

        const ratio =
            this.rpm /
            this.maxRPM;


        return (
            this.horsepower *
            ratio
        );

    }


}
