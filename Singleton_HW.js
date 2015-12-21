// Сингелтон - это клас который возвращает каждый раз один и тот же объект

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


