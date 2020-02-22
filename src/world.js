export default class World {
    constructor(scene, size) {
	this.group = scene.add.group()
	this.grid = new Array(size)
	this.tileSize = 38

	for (var x = 0; x < this.grid.length; x++) {
	    this.grid[x] = new Array(size)
	    for (var y = 0; y < this.grid[x].length; y++) {
		var tile = scene.add.isoSprite(x*this.tileSize,
					       y*this.tileSize,
					       0,
					       'tile',
					       this.group)
		tile.setInteractive();
		tile.on('pointerover', function() {
		    this.setTint(0x888888);
		    this.isoZ += 5;
		});

		tile.on('pointerout', function() {
		    this.clearTint();
		    this.isoZ -= 5;
		});
		this.grid[x][y] = tile
	    }
	}
    }
    coordToPixel( x, y, z ){
	return [this.tileSize * x - this.tileSize/2,
		this.tileSize * y - this.tileSize/2,
		this.tileSize * z]
    }
}
