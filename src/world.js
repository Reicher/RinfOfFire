import Tile from './tile.js'

export default class World {
    constructor(scene, player) {
	this.group = scene.add.group()
	this.tileSizeX = 70
	this.tileSizeY = 40

	this.scene = scene

	this.player = player

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
		var tile = new Tile(this.scene, snapped[0], snapped[1])
		this.grid[x][y][0] = tile
		//tile.x = x*10
		//tile.y = y*10

		//this.scene.input.on('gameobjectdown',this.moveTo)
	    }
	}
	this.origin = this.grid[size/2][size/2][0]
    }
    moveTo(pointer,tile)
    {
    	//Only the closeest ones
	var playerCoord = tile.world.pixelToCoord(tile.world.player.x,
				       tile.world.player.y)
    	var dist_x = Math.abs(tile.row - playerCoord[0])
    	var dist_y = Math.abs(tile.col - playerCoord[1])
    	if ((dist_x + dist_y) > 4)
    	    return

	var pixelPos = tile.world.coordToPixel(tile.row, tile.col)
	this.scene.tweens.add({
	    targets: this.scene.player,
	    x: pixelPos[0],
	    y: pixelPos[1],
	    ease: 'Linear',
	    duration: 300
	});
    }
    coordToPixel( x, y ){
	return [ (x-y) * (this.tileSizeX/2),
		 (x+y) * (this.tileSizeY/2)]
    }
}
