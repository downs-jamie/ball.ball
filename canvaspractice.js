// console.log("anything")
var canvas = document.getElementById('canvas');
// console.log(canvas);


var context = canvas.getContext('2d');
// context.rect(100,100,300,300);
// context.stroke()

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);
// context.lineTo(100,100);
// context.stroke();

function Ball(x,y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.er = Math.PI * 2;
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}
Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context.beginPath();
	context.arc(this.x,this.y,this.radius,this.sr,this.er);
	context.fill()
}
Ball.prototype.updateBallPosition = function(){
	context.clearRect(0,0,500,500);
	this.drawBall();
	this.x += 10;
	this.y += 10;

}
theBall = new Ball(100,100);
console.log(theBall);
var ball_interval = setInterval(theBall.updateBallPosition,50);

// var centerX = 200;
// var centerY = 200;
// // context.moveTo(200,200);
// function drawBall(){
// 	centerX += 10;
// 	centerY += 10;
// 	context.clearRect(0,0,500,500);
// 	context.arc(centerX,centerY,50,0,2*Math.PI);
	
// 	context.fill()
// }

//