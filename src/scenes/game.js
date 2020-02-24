import World from '../world.js'

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
    
    	this.player = this.add.image(0, 0, 
                                     'sprites', 
                                     'player-2.png', 
                                     this.isoGroup)

        this.world = new World(this, 10, this.player)
        this.cameras.main.startFollow(this.player);
    }

    update(time, delta) {
        this.children.bringToTop(this.player)
    }
}
