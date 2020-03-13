import Tile from './tile.js'
import Action from './action.js'

export default class Player extends Tile {
    constructor(scene) {
        super(scene, 0, 0, 'player-2.png');
	this.setOrigin(0.5, 1)
	this.row = 0
	this.col = 0

	//this.setAction(new Action('move', 0, 1))
    }

    setAction(action){
	this.action = action
    }
}
