function Vector(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.x,this.y+vector.y);
};
Vector.prototype.minus = function(vector){
    return new Vector(this.x - vector.x,this.y - vector.y);
};
Vector.prototype.length = function (vector) {
    return Math.sqrt(this.x * this.x + this.y + this.y);
};

var v1 = new Vector(1,5);
var v2 = new Vector(2,6);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v2.length());
