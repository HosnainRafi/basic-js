// function tinyFriend(str) {
//     var shortWord= str[0] ;
//     for (let i = 0; i < str.length; i++) {
//         var word = str[i];
        
//         if (word.length<shortWord.length) {
//            shortWord=word;
//         }
        
//     }
//     return shortWord;
// }
// var name =['rahim','karim','hashem','ali','ahmed',''];
// var result=tinyFriend(name);
// console.log(result);


function tinyFriend(str) {
    var shortWord= str[0] ;
    for (let i = 0; i < str.length; i++) {
        var word = str[i];
      if (str[i]=='') {
          console.log('Name cannot be "" ');
          }
      else{
            
        if (word.length<shortWord.length) {
            shortWord=word;
         }
         
         
      }
    }
    return shortWord;
}
var name =['rahim','karim','hashem','ali','ahmed',''];
var result=tinyFriend(name);
console.log("Tiny Friend name is", result);
