function factorial(n) {
    var fact=[1];
for (i = 1; i <=n; i++) {
    fact[i]=fact[i-1]*i;
}
return fact;

}
var result=factorial(6);
console.log(result);