export default class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, row, col, sprite) {
        super(scene, 0, 0, 'tiles', sprite)

	Tile.WIDTH = 30
	Tile.HEIGHT = 30

	this.row = row
	this.col = col

	scene.add.existing(this)
    }
}
