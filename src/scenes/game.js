import World from '../world.js'
import Player from '../player.js'

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

	this.player = new Player(this)
        this.world = new World(this)
	this.cameras.main.startFollow(this.player);
    }

    // TODO: Remove and change to action.Move(direction)
    moveTo(pointer,tile)
    {
    	// //Only the closeest ones
    	var dist_x = Math.abs(tile.row - this.scene.player.row)
    	var dist_y = Math.abs(tile.col - this.scene.player.col)
    	if ((dist_x + dist_y) > 1)
    	    return

	this.scene.tweens.add({
	    targets: this.scene.player,
	    x: tile.x,
	    y: tile.y,
	    ease: 'Linear',
	    duration: 300,
	    onComplete: this.scene.player.setPos,
	    onCompleteScope: this.scene.player,
	    onCompleteParams: [tile.row, tile.col],
	});
	// TODO: Update player pos when tween is done
    }

    update(time, delta) {
        this.children.bringToTop(this.player)

	// TODO: If Player.action isnt null
	// Go through all grid tiles actions
	// and check if they are valid, create
	// tweens for them and increment turn-num!
    }
}
