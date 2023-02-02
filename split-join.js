const paragraph = "Autism spectrum disorder (ASD) is a developmental, disability caused by differences in the brain, People with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests."
 // split

var parts = paragraph.split(" ");
console.log(parts);

var commma = paragraph.split(",");
console.log(commma);

var chars = paragraph.split("");
console.log(chars);


// slice

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const partial = numbers.slice(3, 7);
console.log(partial);

const partial2 = paragraph.substring(4, 30);
console.log(partial2);