Player = function(game, initialX, initialY) {
	Phaser.Sprite.call(this, game, initialX, initialY, 'player');

	this.scale.setTo(1.5, 1.5)

	this.direction = "up";
	this.moving = false;
	this.curMoveSpeed = "normal";
	this.movementSpeeds = {
		"normal":4,
		"sprint":6,
		"crawl":2
	}
	game.add.existing(this);

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	switch (this.direction) {
		case "left":
			this.x -= this.movementSpeeds[this.curMoveSpeed];
			break;
		case "right":
			this.x += this.movementSpeeds[this.curMoveSpeed];
			break;
		case "up":
			this.y -= this.movementSpeeds[this.curMoveSpeed];
			break;
		case "down":
			this.y += this.movementSpeeds[this.curMoveSpeed];
			break;
	} 
}

Player.prototype.getData = function() {
	return {
		"x" : this.x,
		"y" : this.y,
		"direction" : this.direction,
		"moving" : moving,
		"curMoveSpeed" : curMoveSpeed
	}
}

Player.prototype.unpackData = function(data) {
	this.x = data.x;
	this.y = data.y;
	this.direction = data.direction;
	this.moving = data.moving;
	this.curMoveSpeed = data.curMoveSpeed;
}