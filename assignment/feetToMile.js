// function feetToMile(feet) {
//     var mile =feet/5280;
//     return mile;
// }
// var result=feetToMile(1000);
// console.log(result);

function feetToMile(feet) {
    if (feet<0) {
        console.log('Feet cannot be negative.Please give a positive number.');
    }
    else{
        var mile =feet/5280;
    }
   
    return mile;
}
var result=feetToMile(-5000);
console.log(result);