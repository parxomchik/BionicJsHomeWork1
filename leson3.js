function Class1 (name){
    this.name = name;
}

var examl1 = new Class1('one');
var examl2 = new Class1('two');
var examl3 = new Class1('three');
var examl4 = new Class1('four');
var examl5 = new Class1('five');
var examl6 = new Class1('six');

var arr = ['one','two','three'];
var arr2 = [];


Class1.prototype.method_1 = function () {
    return this.name;
}

examl2.method_1();

function ArrayConstructor (name){
    this.name = name;
}
function acceptArr(arr){
    var res = [];
    for (var i= arr.length -1;i>=0;i--){
        res.push(new ArrayConstructor(arr[i]))
    }
    return res;
}

arr = ['we','re'];
acceptArr(arr);





