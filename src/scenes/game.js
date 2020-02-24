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
	let start = this.world.coordToPixel(9, 9)
	console.log(start)
	//this.player = this.add.isoSprite(start[0], start[1], start[2], 'spritesheet', 'player-0', this.isoGroup);
    }

    update(time, delta) {
	this.children.bringToTop(this.player)
    }
}
