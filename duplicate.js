var num=[2,3,4,5,8,6,7,9,7,5,3];
var newnum=[];
for (let i = 0; i< num.length; i++) {
    var element = num[i];
    var index= newnum.indexOf(element);
    if (index==-1) {
        newnum.push(element);
    }
}
// console.log(newnum);
newnum.sort();
console.log(newnum);