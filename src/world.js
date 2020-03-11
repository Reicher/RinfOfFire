import Solid from './solid.js'

export default class World {
    constructor(scene) {
	this.group = scene.add.group()
	this.tileSizeX = 70
	this.tileSizeY = 40

	this.scene = scene

	this.loadTestMap()
	scene.input.on('gameobjectdown',scene.moveTo)
    }
    loadTestMap(){
	var size = 10

	this.grid = new Array(size)
	for (var x = 0; x < size; x++){
	    this.grid[x] = new Array(size)
	    for (var y = 0; y < size; y++){
		this.grid[x][y] = new Array(size)

		var snapped = this.coordToPixel(x, y)
		var tile = new Solid(this.scene, x, y)
		this.grid[x][y][0] = tile
		tile.x = snapped[0]
		tile.y = snapped[1]
	    }
	}
	this.origin = this.grid[size/2][size/2][0]
    }
    coordToPixel( x, y ){
	return [ (x-y) * (this.tileSizeX/2),
		 (x+y) * (this.tileSizeY/2)]
    }
}
