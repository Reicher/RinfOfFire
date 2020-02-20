import Phaser from "phaser";

import BootScene from './scenes/boot.js'
import SplashScene from './scenes/splash.js'
import MainMenuScene from './scenes/mainmenu.js'
import GameScene from './scenes/game.js'
//import HUD from './scenes/hud.js'

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ BootScene,
	     SplashScene,
	     MainMenuScene,
	     GameScene,
	     //HUD
	   ],
};

var game = new Phaser.Game(config);
