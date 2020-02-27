export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'sprites', 'player-2.png');
	scene.add.existing(this);
	this.setOrigin(0.5, 1)
    }
    moveTo(pointer,tile)
    {
    	//Only the closeest ones
	var playerCoord = tile.getData('world').pixelToCoord(this.x, this.y)
    	var dist_x = Math.abs(tile.getData('row') - playerCoord[0])
    	var dist_y = Math.abs(tile.getData('col') - playerCoord[1])
	//console.log(dist_x + ", " + dist_y)
    	if ((dist_x + dist_y) > 4)
    	    return

	var pixelPos = tile.getData('world').coordToPixel(tile.getData('row'),
							  tile.getData('col'))
	this.scene.tweens.add({
	    targets: this,
	    x: pixelPos[0],
	    y: pixelPos[1],
	    ease: 'Linear',
	    duration: 300
	});
    }
}
