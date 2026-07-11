export class GameLoop {

    private running = false;

    private update:
    ()=>void;


    constructor(
        update:()=>void
    ){

        this.update = update;

    }


    start(){

        this.running = true;

        this.tick();

    }


    private tick(){

        if(!this.running)
            return;


        this.update();


        requestAnimationFrame(
            ()=>this.tick()
        );

    }


    stop(){

        this.running=false;

    }

}
