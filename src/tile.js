export default class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, 0, 0, 'sprites', 'tile.png')

	scene.add.existing(this)

	this.row = x
	this.col = y
	this.setDepth(y)

	this.setInteractive()
	this.on('pointerover', function(){ this.setTint(0x888888) })
	this.on('pointerout', function(){ this.clearTint() })
    }
}
