import { Renderer } from "./Renderer";
import { GameScene } from "./Scene";
import { GameCamera } from "./Camera";
import { GameLoop } from "./Loop";


export class Game {


    renderer:
    Renderer;


    scene:
    GameScene;


    camera:
    GameCamera;


    loop:
    GameLoop;



    constructor(){


        this.renderer =
            new Renderer();


        this.scene =
            new GameScene();


        this.camera =
            new GameCamera();



        this.loop =
            new GameLoop(
                ()=>this.update()
            );



        window.addEventListener(
            "resize",
            ()=>{
                this.renderer.resize();
                this.camera.resize();
            }
        );

    }



    start(){

        this.loop.start();

    }



    update(){

        this.renderer.render(
            this.scene.scene,
            this.camera.camera
        );

    }


}
