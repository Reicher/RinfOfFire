const action_types = {
    MOVE: 'move',
    ATTACK: 'attack'
}

const direction = {
    NORTH: 'north',
    EAST: 'east',
    SOUTH: 'south',
    WEST: 'west'
}

export default class Action {
    constructor(type, p1, p2) {
	Action.TYPE = action_types
	Action.DIRECTION = direction

	this.type = type
	console.log("Created " + type)

	switch(type){
	case Action.TYPE.MOVE:
	    this.row = p1
	    this.col = p2
	    break;
	case Action.TYPE.ATTACK:
	    console.log("Attack!")
	    this.direction = p1
	    this.otherThing = p2
	    break;
	default:
	    console.log("Unknown action..")
	}
    }
}
