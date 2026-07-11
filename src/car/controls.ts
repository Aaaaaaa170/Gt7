export class Controls {

    forward = false;
    backward = false;
    left = false;
    right = false;


    constructor(){

        window.addEventListener(
            "keydown",
            (e)=>this.key(e.code,true)
        );


        window.addEventListener(
            "keyup",
            (e)=>this.key(e.code,false)
        );

    }


    private key(
        code:string,
        pressed:boolean
    ){

        if(code==="KeyW" || code==="ArrowUp")
            this.forward = pressed;


        if(code==="KeyS" || code==="ArrowDown")
            this.backward = pressed;


        if(code==="KeyA" || code==="ArrowLeft")
            this.left = pressed;


        if(code==="KeyD" || code==="ArrowRight")
            this.right = pressed;

    }

}
