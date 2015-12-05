function hi(par) {
    return function mathFunction (a,b){
        var ansver;
        switch (par){
            case 'multiply':
                ansver = a*b;
                break;

            case 'devide':
                ansver = a/b;
                break;

            case 'plus':
                ansver = a+b;
                break;

            case 'math':
                ansver = Math.pow(a,b);
                break;
        }
        return ansver;
    }
}

hi('multiply')(2,5);
var multiply = hi('multiply');
multiply(2,5);



function multiply(a,b){
    return mathFunction('multiply',a,b)

}

function devide(a,b){
    return mathFunction('devide',a,b)
}

function plus(a,b){
    return mathFunction('plus',a,b)
}

function math(a,b){
    return mathFunction('math',a,b)
}

var greetingEng = hi('Hello');
var greetingSpanish = hi('Hola');
var greetingRussian = hi('Привет');

greetingEng('Егор');
greetingSpanish('Егор2');
greetingRussian('Егор3');






function mathFunction (par,a,b){
    var ansver;
    switch (par){
        case 'multiply':
            ansver = a*b;
            break;

        case 'devide':
            ansver = a/b;
            break;

        case 'plus':
            ansver = a+b;
            break;

        case 'math':
            ansver = Math.pow(a,b);
            break;
    }
    return ansver;
}



function multiply(a,b){
     return mathFunction('multiply',a,b)

}

function devide(a,b){
    return mathFunction('devide',a,b)
}

function plus(a,b){
    return mathFunction('plus',a,b)
}

function math(a,b){
    return mathFunction('math',a,b)
}

multiply(1,3);


