function reverseString(str) {
    reverse="";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse=char +reverse;
    }
    return reverse;
}
var statement ="i am a good person.I don't snore at night";
var result=reverseString(statement);
console.log(result);