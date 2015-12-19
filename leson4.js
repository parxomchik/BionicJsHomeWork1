// -----------------------------------//


String.prototype.repitify = function (times) {
    var concated = '';
    for(var i =1;i <=times;i++){
        concated +=this;
    }
    return concated;
};

console.log('word'.repitify(5));


// -----------------------------------//

Array.prototype.aliq = function (arr) {
    var res= [];
    for(i=0;i < arr.length; i++ ){
        if (arr[i]%2 === 0){
            res.push(arr[i]);
        }
        return res;
    }
};

var arr =[2,4,5];
arr.aliq(arr);

// -----------------------------------//

function some(arr, func) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (func(arr[i])) {
            return true;
        }

    };
    return false;
}


some([1,2,3,4,5], function(a){
    return a === 5;
});


// -----------------------------------//


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

// -----------------------------------//

function multy(str,arr){
    var tStart = Date.now();
    var i = 0;
    var resArr = [];
    var tEnd = [];
    switch (str){
        case 'foreach':
            for( i=100000-1; i>=0;i--) {
                arr.forEach(function (el) {
                    el *= 2;
                });
            }
        break;
        case  'forin':
            for( i=100000-1; i>=0;i--) {
                for(var el in arr){
                    el*=2;
                }
            }
        break;
        case 'for':
            for( i=100000-1; i>=0;i--){
                for(var j= arr.length-1; j>=0;j--){
                    arr[j]*=2;
                }
            }
        break;
    }
    return new Date() - tStart;
}
    var arr = [0,1,2];

    var foR =  multy.bind(null,'for');
    var foriN =  multy.bind(null,'forin');
    var foreacH =  multy.bind(null,'foreach');

 console.log(foR(arr));
 console.log(foriN(arr));
 console.log(foreacH(arr));

 //
 //console.log(multy('foreach',arr));
 //console.log(multy('forin',arr));
 //console.log(multy('for',arr));




