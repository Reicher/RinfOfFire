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

	this.load.image("ship", "./src/assets/ship.png");
	this.load.image("space", "./src/assets/space.jpg");
	this.load.image("planet", "./src/assets/planet.png");
	this.load.spritesheet('spaceman', './src/assets/spaceman.png', { frameWidth: 16, frameHeight: 32 });

	this.load.on('complete', function () {
            progress.destroy();
        });
    }
    create() {
	console.log("BootScene - Create");
	this.scene.start('SplashScene');
    }
}
 
