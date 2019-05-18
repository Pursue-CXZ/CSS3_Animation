var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width =  window.innerWidth?window.innerWidth:document.body.clientWidth;
var height = canvas.height = window.innerHeight?window.innerHeight:document.body.clientHeight;

var balls = [];

function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
};

function randomColor(){
    return "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
};

function Ball(x,y,speedX,speedY,color,size){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    this.size = size
};

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
    ctx.fill();
    ctx.closePath();
};

Ball.prototype.update = function(){

    if((this.x+this.size)>=width){
        this.speedX = -this.speedX;
    };
    if((this.x+this.size)<=0){
        this.speedX = -this.speedX;
    };

    if((this.y+this.size)>=height){
        this.speedY = -this.speedY;
    };
    if((this.y+this.size)<=0){
        this.speedY = -this.speedY;
    };
    this.x += this.speedX;
    this.y += this.speedY;
};

Ball.prototype.jiance = function(){

    for(var j = 0; j<balls.length; j++){
        if(this!==balls[j]){ 
            var dx = this.x - balls[j].x; 
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if(distance <this.size + balls[j].size){
                balls[j].color = this.color = randomColor();
            };
        };
    };
};

function loop(){
    ctx.fillStyle = "rgba(255,255,255,0.25)"
    ctx.fillRect(0,0,width,height);
    while(balls.length<25){
        var ball = new Ball(
            random(0,width),
            random(0,height),
            random(-10,10),
            random(-10,10),
            randomColor(),
            random(10,30)
        );
        balls.push(ball);
         };

    for(var i = 0; i <balls.length ; i++){
        balls[i].draw();
        balls[i].update();
        balls[i].jiance();
    };
};
setInterval(function(){
    loop();
},20)
