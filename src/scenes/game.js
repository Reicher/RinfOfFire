//import Player from '../player.js'
import IsoPlugin from 'phaser3-plugin-isometric';

export default class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene',
	    mapAdd: { isoPlugin: 'iso' }
        });
    }

    preload() {
	console.log("GameScene - preload");
	this.load.scenePlugin({
	    key: 'IsoPlugin',
	    url: IsoPlugin,
	    sceneKey: 'iso'
	});
    }
    create() {
	console.log("GameScene - create");
	this.isoGroup = this.add.group();

	this.iso.projector.origin.setTo(0.5, 0.3);

	// Add some tiles to our scene
	this.spawnTiles();

	this.player = this.add.isoSprite(0, 0, 0, 'player', this.isoGroup);
    }

    spawnTiles() {
	var tile;

	for (var xx = 0; xx < 256; xx += 38) {
	    for (var yy = 0; yy < 256; yy += 38) {
		tile = this.add.isoSprite(xx, yy, 0, 'tile', this.isoGroup);
		tile.setInteractive();

		tile.on('pointerover', function() {
		    this.setTint(0x888888);
		    this.isoZ += 5;
		});

		tile.on('pointerout', function() {
		    this.clearTint();
		    this.isoZ -= 5;
		});
	    }
	}
    }

    update(time, delta) {
    }
}
