function reversedString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
    }
    return element;


}
var string = 'i am goku';
reversed = reversedString(string)
console.log(reversed);



