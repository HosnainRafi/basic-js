var name=['Rahim','Karim','bolu','kolu','Ali','Ahmed'];
var word=name[0];
var minstr=name[0].length;
for (let i = 0; i < name.length; i++) {
    var min=name[i].length;
    if (min<minstr) {
        word=name[i];
    }
    }
console.log(word);

// var x=['purna','banik','dibbendu','rafy','subir','rafiq','alif','p','dibbendu'];
// var ans=x[0];
// var minStr=x[0].length;
// for(i=0;i<x.length;i++){
//     var min=x[i].length;
//     if(min<minStr){
//         ans=x[i];

//     }
// }
// console.log(ans)