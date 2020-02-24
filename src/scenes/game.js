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

    	// Add some tiles to our scene
    	this.world = new World(this, 10)
    	let start = this.world.coordToPixel(1, 1)
    	console.log(start)
    	this.player = this.add.image(start[0], start[1], 'sprites', 'player-2.png', this.isoGroup)

        this.cameras.main.startFollow(this.player);
    }

    update(time, delta) {
        this.children.bringToTop(this.player)
    }
}
