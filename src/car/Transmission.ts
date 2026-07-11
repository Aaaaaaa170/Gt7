export class Transmission {


    gear:number = 1;


    gears:number[] = [
        0,
        3.2,
        2.1,
        1.5,
        1.2,
        1.0,
        0.8
    ];



    shiftUp(){

        if(this.gear < 6)
            this.gear++;

    }



    shiftDown(){

        if(this.gear > 1)
            this.gear--;

    }



    ratio(){

        return this.gears[
            this.gear
        ];

    }


}
