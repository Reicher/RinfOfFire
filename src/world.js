export default class World {
    constructor(scene, size) {
	this.group = scene.add.group()
	this.grid = new Array(size)
	this.tileSize = 38
	this.scene = scene

	this.create(size)
    }
    create(size){
	for (var x = 0; x < size; x++)
	{
	    this.grid[x] = new Array(size)
            for (var y = 0; y < size; y++)
            {
		var tx = x * this.tileSize + (this.tileSize/2)
		var ty = y * this.tileSize + (this.tileSize/2)
		var tile = this.scene.add.image(tx,
					  ty,
					  'sprites',
					  'tile',
					  this.group);

		tile.setData('row', x);
		tile.setData('col', y);
		tile.setDepth(ty);

		tile.setInteractive();
		tile.on('pointerover', function() {
		    this.setTint(0x888888);
		    //this.isoZ += 5;
		});

		tile.on('pointerout', function() {
		    this.clearTint();
		    //this.isoZ -= 5;
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
