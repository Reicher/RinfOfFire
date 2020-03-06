export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 0, 0, 'sprites', 'player-2.png');
	scene.add.existing(this);
	this.row = 0
	this.col = 0
	this.setOrigin(0.5, 1)
    }
}
