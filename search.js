const paragraph = "Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. People with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests."

const doesExist = paragraph.includes("developmental ");
const doesntExist = paragraph.includes("Practice ");

console.log(doesExist);
console.log(doesntExist);


// lowercase search
var searchString = "Problems";
var searchStringLawer = searchString.toLowerCase();
var paragraphLawer= paragraph.toLowerCase();
var exis = paragraphLawer.includes(searchStringLawer);
console.log(exis);






const numbers = '1 2 3 4 5 6 7 8 9';

const searchNum = '5';

const exist = numbers.includes(searchNum);
console.log(exist);