var result = Math.pow(2, 10);
// console.log(result)


// - to +

var num1 = 35;
var num2 = 40;

var sum = Math.abs(num1 - num2);

if (sum <= 5) {
    // console.log("Your can be Friend");
}
else {
    console.log("you cant");
}


//////////////// Round Number

const number = 3.45345;
const fullnumber = Math.round(number);
console.log(fullnumber);

const number1 = 8.45345;
const fullnumber1 = Math.ceil(number1);
console.log(fullnumber1);

const number2 = 7.45345;
const fullnumber2 = Math.floor(number2);
console.log(fullnumber2);

// random
const random = Math.round(Math.random()*100000);
console.log(random);
