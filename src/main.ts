import { Game } from "./core/Game";

import { Car } from "./car/Car";

import { Ground } from "./world/Ground";
import { Track } from "./world/Track";
import { Sky } from "./world/Sky";
import { WorldLight } from "./world/Light";

import { HUD } from "./ui/HUD";
import { Menu } from "./ui/Menu";



const game = new Game();



const scene =
    game.scene.scene;



// 空

new Sky(scene);


// 光

new WorldLight(scene);



// 地面

const ground =
    new Ground();

scene.add(
    ground.mesh
);



// コース

const track =
    new Track();

scene.add(
    track.mesh
);



// 車

const car =
    new Car();

scene.add(
    car.mesh
);



// UI

const hud =
    new HUD();


const menu =
    new Menu();



setTimeout(()=>{

    menu.hide();

},2000);




// ゲーム更新追加

const oldUpdate =
    game.update.bind(game);



game.update = ()=>{


    oldUpdate();


    car.update();


    const speed =
        car.physics.velocity.length()
        * 100;


    hud.update(
        speed,
        car.engine.rpm
    );


};
    


game.start();
