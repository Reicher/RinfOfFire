import Tile from './tile.js'

export default class Player extends Tile {
    constructor(scene) {
        super(scene, 0, 0, 'player-2.png');
	this.setOrigin(0.5, 1)
    }
}
