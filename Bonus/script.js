//superQuickly short LCM with any number
function fizzBuzz(a,b){
    var n=1;
   while(n<100){
    switch (true){
        case !(n % a):
        console.log("Fizz");
        document.querySelector(".output").innerHTML += "Fizz <br>"
        break;
        case !(n % b):
        console.log("Buzz");
        document.querySelector(".output").innerHTML += "Buzz <br>"
        break;
        case !(n % (a*b)):
        console.log("fizzBuzz");
        document.querySelector(".output").innerHTML += "FizzBuzz <br>"
        break;
        default:
        console.log(n);
        document.querySelector(".output").innerHTML += n + "<br>"
        break;
    }
    n++
}
}
fizzBuzz(3,5);