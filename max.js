// var business=450;
// var minister= 550;
// var sochib=350;
// if (business>minister) {
//     if (business>sochib) {
//         console.log('Business is bigger');
//     }
//     else{
//         console.log('Sochib is bigger');
//     }

// }
// else{
//     if (minister>sochib) {
//         console.log('minister is bigger');
//     }
//     else{
//         console.log('sochib is bigger');
//     }
// }

//Solution 2:
var business=450;
var minister= 550;
var sochib=350;

var max=Math.max(business,minister,sochib);
console.log(max, 'is bigger');