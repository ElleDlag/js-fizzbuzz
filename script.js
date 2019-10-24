//Number.isInteger() method ecma 2015

for(var i = 1; i <= 100; i++){
    if(Number.isInteger(i / 3) && !Number.isInteger(i / 5)){
        console.log("Fizz");
    } else if(Number.isInteger(i / 5) && !Number.isInteger(i / 3)){
        console.log("Buzz");
    } else if(Number.isInteger(i / 3) &&  Number.isInteger(i / 5)){
        console.log("FizzBuzz");
    } else (console.log(i))
}