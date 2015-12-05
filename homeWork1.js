function tupeOfInput (a) {
    switch (Object.prototype.toString.call(a)){
        case '[object String]':
            var arr = ['indexOf','search'];
            var type = 'String';
            var method;
            var res;



            //for(var i = 0; i<arr.length;i++){
            //    res = a.arr[i]('University');
            //}


            method = '.indexOf()';
            typeLog(a,type,method,res);
            res = a.lastIndexOf('bionic');
            typeLog(a,type,'.lastIndexOf()',res);

            res = a.search('bionic');
            method = '.search()';
            typeLog(a,type,method,res);

            res = a.slice(0,5);
            method = '.slice()';
            typeLog(a,type,method,res);

            res = a.substring(7,13);
            method = '.substring()';
            typeLog(a,type,method,res);

            res = a.replace('bionic','Angular');
            method = '.replace()';
            typeLog(a,type,method,res);

            res = a.toUpperCase();
            method = '.toUpperCase()';
            typeLog(a,type,method,res);

            res = a.toLowerCase();
            method = '.toUpperCase()';
            typeLog(a,type,method,res);


            res = a.concat('1');
            method = '.concat()';
            typeLog(a,type,method,res);

            res = a.charAt(5);
            method = '.charAt()';
            typeLog(a,type,method,res);

            res = a.charCodeAt(0);
            method = '.charAt()';
            typeLog(a,type,'.charCodeAt()',res);

            res = a.split(',');
            method = '.split()';
            typeLog(a,type,method,res);

            break;
        case '[object Number]':
            type = 'Number';

            res =  a.toString();
            typeLog(a,type,'.toString()',res);

            res = a.toExponential();
            typeLog(a,type,'.toExponential()',res);

            res = a.toFixed();
            typeLog(a,type,'.toFixed()',res);

            res = a.toPrecision(2);
            typeLog(a,type,'.toPrecision(2)',res);

            res = a.valueOf();
            typeLog(a,type,'.valueOf()',res);

            break;

        case '[object Array]':

            type = "Array";

            res = a.join(" * ");
            typeLog(a,type,'.join()',res);

            res = a.pop();
            typeLog(a,type,'.pop()',res);

            res = a.push(25);
            typeLog(a,type,'.push()',res);

            res = a.shift();
            typeLog(a,type,'.shift()',res);

            res = a.unshift(26);
            typeLog(a,type,'.unshift()',res);

            res = a.sort();
            typeLog(a,type,'.sort()',res);

            res = a.reverse();
            typeLog(a,type,'reverse()',res);

            break;
    }
}
function typeLog(param,type,method,result) {
    console.log('LOG: Argument '+'"'+param+'"'+' ,type : '+type+','+
    '\n'+type+' method: '+method+
    '\n'+'Input '+'"'+param+'"'+
    '\n'+'Using: '+'"'+param+'"'+method+
    '\n'+'Result:'+result+
    '\n'
    );
}
tupeOfInput ([1,2,3]);

tupeOfInput (9.656);

tupeOfInput ('bionic, University, Kyiv');
