var multiply=function(x,y){
    console.log(x*y);
}

var multiplyby2=multiply.bind(this,2);

multiplyby2(3);

var multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

var multiplyby2=multiply(2);
multiplyby2(4);