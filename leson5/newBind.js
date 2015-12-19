function bind(func,context){
    var arg = Array.prototype.slice.call(arguments,2);
    console.log(arg);
    //return function(){
    //
    //}
}
var a = 'lol';
function test(){

    //console.log(a);
}

bind(test(),null,1,2,3,4);