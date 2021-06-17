
function getArraySum(num) {
    var sum=0;
for (i = 0; i < num.length; i++) {
    var element=num[i];
    sum=sum+element;
}
return sum;
}
var num=[87,86,94,56,09,34,76,34,65,98,12,67,43];
var result= getArraySum(num);
console.log("Total Sum is ", result);