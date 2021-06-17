function checkPrime(n) {
for (i=2;i<n;i++) {
    console.log(i,n%i);
    if(n%i==0){
       return 'Not a Prime';
    }

}
 return 'Your num is prime';
}
var result=checkPrime(6);
console.log(result);

