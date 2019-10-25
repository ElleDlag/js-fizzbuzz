//Number.isInteger() method ecma 2015

/* for(var i = 1; i <= 100; i++){
    if(Number.isInteger(i / 3) && !Number.isInteger(i / 5)){
        console.log("Fizz");
    } else if(Number.isInteger(i / 5) && !Number.isInteger(i / 3)){
        console.log("Buzz");
    } else if(Number.isInteger(i / 3) &&  Number.isInteger(i / 5)){
        console.log("FizzBuzz");
    } else (console.log(i))
} */

//Method two

for(var i = 1; i <= 100; i++){
    if((i % 3) == 0  && (i % 5) == 0){
        console.log("FizzBuzz");
    }else if((i % 3) == 0){
        console.log("Fizz");
    } else if((i % 5) == 0){
        console.log("Buzz");
    } else{ console.log(i)}
}