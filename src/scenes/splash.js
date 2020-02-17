export default class SplashScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'SplashScene'
        });
    }
    preload() {
	console.log("SplashScene - preload");
        // this.load.atlas('mario-sprites', 'assets/mario-sprites.png', 'assets/mario-sprites.json');
    }
    create() {
	console.log("SplashScene - create");
        this.scene.bringToTop();

	this.scene.start('MainMenuScene');
    }

    update(time, delta) {
    }
}
