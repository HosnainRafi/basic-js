function factorial(n) {
        var fact=1;
    for (i = 1; i <=n; i++) {
        fact=fact*i;
        // console.log(i,factorial);    
    }
    return fact;

}
var result=factorial(6);
console.log(result);