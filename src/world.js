export default class World {
    constructor(scene, size) {
		this.group = scene.add.group()
		this.grid = new Array(size)
		this.tileSizeX = 70
		this.tileSizeY = 40
		this.scene = scene

		//this.create(size)
		this.create(0, 0, 10, 10)
    }
    create(offsetX, offsetY, sizeX, sizeY){
    	this.offsetX = offsetX
    	this.offsetY = offsetY

		for (var x = 0; x < sizeX; x++){
	        for (var y = 0; y < sizeY; y++){
				var tx = offsetX + (x-y) * (this.tileSizeX/2)
				var ty = offsetY + (x+y) * (-2 + this.tileSizeY/2)
				var tile = this.scene.add.image(tx, ty, 'sprites', 'tile.png',this.group)

				tile.setDepth(ty)

				tile.setInteractive()
				tile.on('pointerover', function(){ this.setTint(0x888888) })
				tile.on('pointerout', function(){ this.clearTint() })
	        }
		}
    }
    coordToPixel( x, y ){
		return [this.offsetX + (x-y) * (this.tileSizeX/2),
				-this.tileSizeY/2 + this.offsetY + (x+y) * (-2 + this.tileSizeY/2)]
	    }
}
