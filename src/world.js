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
		var tile = this.scene.add.image(snapped[0], snapped[1], 'sprites', 'tile.png',this.group)
		tile.setData('row', x)
		tile.setData('col', y)
		tile.setData('world', this)
		tile.setDepth(snapped[1])

		tile.setInteractive()
		this.scene.input.on('gameobjectdown',this.moveTo)
		tile.on('pointerover', function(){ this.setTint(0x888888) })
		tile.on('pointerout', function(){ this.clearTint() })
	    }
	}
    }
    moveTo(pointer,tile)
    {
    	//Only the closeest ones
	var playerCoord = tile.getData('world').pixelToCoord(tile.getData('world').player.x,
				       tile.getData('world').player.y)
    	var dist_x = Math.abs(tile.getData('row') - playerCoord[0])
    	var dist_y = Math.abs(tile.getData('col') - playerCoord[1])
    	if ((dist_x + dist_y) > 4)
    	    return

	var pixelPos = tile.getData('world').coordToPixel(tile.getData('row'),
							  tile.getData('col'))
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
