import Tile from './tile.js'

export default class Solid extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile.png')

	this.setInteractive()
	this.on('pointerover', function(){ this.setTint(0x888888) })
	this.on('pointerout', function(){ this.clearTint() })
    }
}
