function Ball( param )
{
    this._radius = param.radius;
    this._color = param.color;
}
Ball.prototype =
{
    constructor: Ball,

    INCREMENTATION_STEP: 5,

    draw: function(){console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)},
    inc: function(){ this._radius += this.INCREMENTATION_STEP }
};

var ball = new Ball({radius:100, color:"red"});
console.log(ball);
ball.draw();
ball.inc();


function StripedBall( ball )
{
    this._ball = ball
}
StripedBall.prototype =
{
    //constructor: StripedBall,

    draw: function()
    {
        this._ball.draw();
        console.log("and with stripes");
    },
    inc: function()
    {
        return this._ball.inc();
    }
}

function SpeckledBall( ball )
{
    this._ball = ball
}
SpeckledBall.prototype =
{
    //constructor: SpeckledBall,

    draw: function()
    {
        this._ball.draw();
        console.log("and with dots!");
    },
    inc: function()
    {
        return this._ball.inc();
    }
}


var ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
var ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

ball1.draw();
ball1.inc();
ball1.draw();
ball2.draw();



function Phone(color,diametr){
    this._color = color;
    this._diametr = diametr;
}

Phone.prototype =
{
    showInfo:function(){
        console.log('Phone color = '+this._color+'phone diametr = '+this._diametr)
    }
};

//var iphone = new Phone('red',5);
//iphone.showInfo();


function Camera(phone){
    this._phone = phone;

}
Camera.prototype = {
    showInfo:function(){
        this._phone.showInfo();
        console.log('and has camera');
    }

};


var iphome5 = new Camera(new Phone('red',5));

iphome5.showInfo();