export default class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }
    preload() {
	console.log("BootScene - preload");

        const progress = this.add.graphics();

        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0,
			      this.sys.game.config.height / 2,
			      this.sys.game.config.width * value,
			      60);
        });

	this.load.image("tile", "./src/assets/raw/tile.png");
	this.load.spritesheet('player',
			      './src/assets/raw/player.png',
			      { frameWidth: 16,
				frameHeight: 32,
				startFrame: 0,
				margin : 0});

	this.load.on('complete', function () {
            progress.destroy();
        });
    }
    create() {
	console.log("BootScene - Create");
	this.scene.start('SplashScene');
    }
}
