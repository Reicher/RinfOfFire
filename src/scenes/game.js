import World from '../world.js'
//import Player from '../player.js'

export default class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene',
        });
    }

    preload() {
	console.log("GameScene - preload");
    }
    create() {
    	console.log("GameScene - create");

	//this.player = new Player(this, 0, 0)
        this.world = new World(this, this.player)
        this.cameras.main.startFollow(this.world.origin);
    }

    update(time, delta) {
        //this.children.bringToTop(this.player)
    }
}
