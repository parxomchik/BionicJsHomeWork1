//var Client = (function() {
//    // Our "private" instance
//    var instance;
//
//    // The constructor
//    function Client() {
//
//        //// If it's being called again, throw an error
//        //if (typeof instance != "undefined") {
//        //    throw new Error("Client can only be instantiated once.");
//        //}
//        //
//        //// initialize here
//        //
//        //// Keep a closured reference to the instance
//        //instance = this;
//        //getInstance: function () {
//            if ( !instance ) {
//                instance = login();
//            }
//            return instance;
//        //}
//    }
//
//    // Add public methods to Client.prototype
//    Client.prototype.myPublic = function() {
//
//    }
//
//    Client.getSingletonInstance = function() {
//        if (typeof instance == "undefined") {
//            return new this();
//        }
//        else {
//            return instance;
//        }
//    }
//
//    // Return the constructor
//    return Client;
//})();
//
//
//var c1 = Client.getSingletonInstance();
//var c2 = Client.getSingletonInstance();
//
//
//console.log(c1);
//console.log(c1 == c2); // true


console.log('first way:');
var Singleton;
(function(){
    var instance;
    Singleton = function Singleton() {

        if (instance) {
            return instance;
        }

        instance = this;

    }

    Singleton.prototype = {
        setMessage: function(message) {
            this.msg = message;
        },
        getMessage: function() {
            return this.msg;
        }
    }
}());

var s1 = new Singleton();
s1.setMessage('test1');
var s2 = new Singleton();
s2.setMessage('test2');
console.log(s1.getMessage());
console.log(s2.getMessage());

s2.setMessage('test3');
console.log(s2.getMessage());
console.log(s1.getMessage());

delete(Singleton);

// second way
console.log('second way:');

function Singleton() {

    if (typeof Singleton.instance === 'object') {

        return Singleton.instance;

    }

    this.msg = 'Message';

    Singleton.instance = this;

}

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1.msg);
console.log(s2.msg);
s2.msg = 'New message';
console.log(s1.msg);
console.log(s2.msg);

//var r;
//
//function xz(){
//    if(r){
//      return r;
//    }
//}
//xz();