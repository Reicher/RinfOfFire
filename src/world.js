import Tile from './tile.js'

export default class World {
    constructor(scene, size, player) {
	this.group = scene.add.group()
	this.grid = new Array(size)
	this.tileSizeX = 70
	this.tileSizeY = 40

	this.scene = scene

	this.player = player

	this.create(10, 10)
    }
    create(sizeX, sizeY){

	for (var x = 0; x < sizeX; x++){
	    for (var y = 0; y < sizeY; y++){
		var snapped = this.coordToPixel(x, y)
		var tile = new Tile(this.scene, snapped[0], snapped[1])
		tile.row = x
		tile.col = y
		tile.world = this

		this.scene.input.on('gameobjectdown',this.moveTo)
	    }
	}
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
    pixelToCoord( x, y ){
	return [ (x-y) / (this.tileSizeX/2),
		 (x+y) / (this.tileSizeY/2)]
    }
}
