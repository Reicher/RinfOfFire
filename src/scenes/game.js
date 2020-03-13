import World from '../world.js'
import Player from '../player.js'
import Action from '../action.js'

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

	this.input.on('gameobjectdown',this.clicked)
    }

    // TODO: Remove and change to action.Move(direction)
    clicked(pointer,tile)
    {
	tile.scene.player.setAction(new Action('move',
					       tile.row,
					       tile.col))
    }

    update(time, delta) {
        this.children.bringToTop(this.player)

	// TODO: If Player.action isnt null
	// Go through all grid tiles actions
	// and check if they are valid, create
	// tweens for them and increment turn-num!
	if( this.player.action ){
	    switch(this.player.action.type){
	    case Action.TYPE.MOVE:
		this.world.move(this.player,
				this.player.action.row,
				this.player.action.col)
		break;
	    default:
		console.log("Game: Unknown action type")
	    }
	    this.player.action = null
	}
    }
}
