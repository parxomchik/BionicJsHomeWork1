// Сингелтон - это клас который возвращает каждый раз один и тот же объект


console.log('Первыйвариант 2:');

var singleton = (function(){
    // приватрые переменные
    var instance,
    logined_users = 1023;

    //Публичный метод

    function login(){
        return{
            addUser: function(){
                return ++logined_users;
            }
        }
    }


    return{
        getInstance: function () {
            if ( !instance ) {
                instance = login();
            }
            return instance;
        }
    }
})();

var morning = singleton.getInstance();
var evening = singleton.getInstance();


console.log( morning.addUser() );
console.log( evening.addUser() );


// Вариант 2


console.log('Второй вариант 2:');

var Singleton2;
(function(){
    var instance;
    Singleton2 = function Singleton2() {

        if (instance) {
            return instance;
        }

        instance = this;

    };

    Singleton2.prototype = {
        setLoginedUsers: function(logined_users){
            return this.users = logined_users;
        },
        getLoginedUsers: function(){
            return this.users;
        },
        addLoginedUser:function(){
            return ++this.users;
        }

    }
}());

var s1 = new Singleton2();
var s2 = new Singleton2();

console.log(s2.setLoginedUsers(24));
console.log(s2.getLoginedUsers());
console.log(s2.addLoginedUser());
console.log(s1.getLoginedUsers());

