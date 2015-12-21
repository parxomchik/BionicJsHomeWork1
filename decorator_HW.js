// Декоратор - это функция которая изменяет(добавляет) поведение существующей функции

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