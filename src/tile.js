export default class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'sprites', 'tile.png')

	scene.add.existing(this)

	this.setDepth(y)
	this.row = 0
	this.col = 0

	this.setInteractive()
	this.on('pointerover', function(){ this.setTint(0x888888) })
	this.on('pointerout', function(){ this.clearTint() })

	//group.add(this)
    }
}
