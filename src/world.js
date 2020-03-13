import Solid from './solid.js'
import Action from './action.js'

export default class World {
    constructor(scene) {
	this.group = scene.add.group()
	this.tileSizeX = 70
	this.tileSizeY = 40

	this.scene = scene

	this.loadTestMap()
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
    move(tile, row, col){
	var dist_x = Math.abs(tile.row - row)
    	var dist_y = Math.abs(tile.col - col)
    	if ((dist_x + dist_y) > 1)
    	    return

	this.scene.tweens.add({
	    targets: tile,
	    x: this.grid[row][col][0].x,
	    y: this.grid[row][col][0].y,
	    ease: 'Linear',
	    duration: 300,
	    // onComplete: this.scene.player.setPos,
	    // onCompleteScope: this.scene.player,
	    // onCompleteParams: [tile.row, tile.col],
	});
	// TODO: Update player pos when tween is done
	tile.row = row
	tile.col = col
    }
}
