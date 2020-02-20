import World from '../world.js'
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
	this.world = new World(this, 10)

	this.player = this.add.isoSprite(0, 0, 0, 'player', this.isoGroup);
    }

    update(time, delta) {
	this.children.bringToTop(this.player)
    }
}
