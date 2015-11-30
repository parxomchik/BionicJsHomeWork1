function getthird(a){
    switch (typeof a){
        case "string":
            return a.length>2? a.slice(2,3):'lenght less than 3'
    }
}
getthird("asdea");

function checkifarray(arr){

    // проверка на масив если

    return Object.prototype.toString.call( arr ) === '[object Array]' ? true : false;
}

checkifarray([1,2,3]);