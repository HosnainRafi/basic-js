function FindDuplicate(num) {
    var newnum=[];
for (let i = 0; i< num.length; i++) {
    var element = num[i];
    var index= newnum.indexOf(element);
    if (index==-1) {
        newnum.push(element);
    }
}
return newnum;
}
var num=[2,3,4,5,8,6,7,9,7,5,3];
var result=FindDuplicate(num);
//console.log(result);
 var sortResult=result.sort();
console.log(sortResult);