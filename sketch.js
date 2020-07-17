var ball;
var paddle;
var b1, b2, b3, b4, b5, b6, b7, b8;
var a1, a2, a3, a4;
var r, x;

function setup() {
	ball = createSprite(200, 350, 10, 10);
	ball.setVelocity(5, -6);
	paddle = createSprite(197.5, 365, 50, 10);

	b1 = createSprite(25, 200, 3, 370);
	b2 = createSprite(375, 200, 3, 370);
	b3 = createSprite(200, 375, 370, 3);
	b4 = createSprite(90, 25, 150, 3);
	b5 = createSprite(310, 25, 150, 3);
	b6 = createSprite(162, 12.5, 3, 25);
	b7 = createSprite(235, 12.5, 3, 25);
	b8 = createSprite(200, 1, 75, 3);

	a1 = createSprite(197.5, 175, 5, 50);
	a2 = createSprite(197.5, 175, 50, 5);
	a3 = createSprite(85, 175, 40, 5);
	a4 = createSprite(307, 175, 40, 5);

	r = 0;
	x = 0;
}

function draw() {
	background("white");

	ball.bounceOff(b1);
	ball.bounceOff(b2);
	//ball.bounceOff(b3);
	ball.bounceOff(b4);
	ball.bounceOff(b5);
	ball.bounceOff(b6);
	ball.bounceOff(b7);
	//ball.bounceOff(b8);
	ball.bounceOff(a1);
	ball.bounceOff(a2);
	ball.bounceOff(a3);
	ball.bounceOff(a4);
	ball.bounceOff(paddle);

	r = r + 5;
	a1.rotation = r;
	a2.rotation = r;

	a3.rotation = 90;
	a4.rotation = 90;

	paddle.x = mouseX;
	if (ball.isTouching(b3)) {
		x = 1;
	}
	if (x == 1) {
		ball.setVelocity(0, 0);

		textSize(25);
		text("!!YOU LOSE!!", 125, 200);
	}
	if (ball.isTouching(b8)) {
		x = 2;
	}
	if (x == 2) {
		ball.setVelocity(0, 0);
		textSize(25);
		text("!!YOU WIN!!", 125, 200);
	}

	if (x == 0) {
		drawSprites();
	}
}
