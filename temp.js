let num1= 10;
let num2= 20;

const temp =num1;
num1=num2;
num2=temp;
console.log(num1, num2);


// another way

let first = 44;
let second = 34;

[first, second] = [second, first];
console.log(first, second);