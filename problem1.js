// This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you
// find out who will get the delicious cake?

//  Input:
// The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and Z (The marks
//  Chinku has got).

//  Output:
//  Print the name of the topper.
//                           Sample Input-1:
//                                                          Sample Input-2:
//                           84 99 77
//                                                          69 97 99
//                           Sample Output-1:
//                                                          Sample Output-2:
//                           Dela
//                                                          Chinku

////////////////////////////////////////////////////////////////////////////////////////////////

const jim = 82;
const dela = 99;
const Chinku = 77;

if (jim > dela && jim > Chinku) {
    console.log('jim will eat the cake');

}

else if (dela > jim && dela > Chinku) {
    console.log('dela will eat the cake');

}
else { console.log('chinku will eat the cake') }


//////////////////////////////

const high = Math.max(jim, dela, Chinku);
if (high === jim) {
    console.log('jim will eat the cake');

}
else if (high === dela) {
    console.log('dela will eat the cake');
}
else {
    console.log('chinku will eat the cake')
}