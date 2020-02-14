import Phaser from "phaser";
import IsoPlugin from 'phaser3-plugin-isometric';

import BootScene from './scenes/boot.js'
import SplashScene from './scenes/splash.js'
import MainMenuScene from './scenes/mainmenu.js'
import GameScene from './scenes/game.js'
import HUD from './scenes/hud.js'

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    physics:  {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            },
	    plugins: {
                attractors: true
            },
	    debug: true
        }
    },
    scene: [ BootScene,
	     SplashScene,
	     MainMenuScene,
	     GameScene,
	     HUD]
};

var game = new Phaser.Game(config);
