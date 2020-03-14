import Tile from './tile.js'
import Action from './action.js'

export default class Player extends Tile {
    constructor(scene) {
        super(scene, 0, 0, 'puppet64.png');
	this.setOrigin(0.5, 1)
	this.row = 0
	this.col = 0

	this.loadAnimations(scene)

	this.anims.play('walk-SE');
    }

    loadAnimations(scene){
	var NE = scene.anims.generateFrameNames('tiles', {
	    start: 19, end: 27, zeroPad: 1, prefix: 'puppet', suffix: '.png'})
	var SE = scene.anims.generateFrameNames('tiles', {
	    start: 64, end: 72, zeroPad: 1, prefix: 'puppet', suffix: '.png'})
	var SW = scene.anims.generateFrameNames('tiles', {
	    start: 46, end: 53, zeroPad: 1, prefix: 'puppet', suffix: '.png'})
	var NW = scene.anims.generateFrameNames('tiles', {
	    start: 1, end: 9, zeroPad: 1, prefix: 'puppet', suffix: '.png'})

	scene.anims.create({ key: 'walk-NE', frames: NE, frameRate: 10, repeat: -1 });
	scene.anims.create({ key: 'walk-SE', frames: SE, frameRate: 10, repeat: -1 });
	scene.anims.create({ key: 'walk-SW', frames: SW, frameRate: 10, repeat: -1 });
	scene.anims.create({ key: 'walk-NW', frames: NW, frameRate: 10, repeat: -1 });
    }

    setAction(action){
	this.action = action
    }
}
