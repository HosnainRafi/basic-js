var friendAge= [10, 18, 20, 28, 25 ];
console.log(friendAge);
friendAge[1]=20;
console.log(friendAge);
friendAge.push(56);
friendAge.push(68);
console.log(friendAge);
console.log(friendAge.length);
friendAge.pop();
console.log(friendAge);
friendAge.unshift(32);
console.log(friendAge);
friendAge.unshift(2,76 ,65);
console.log(friendAge);
removedArray = friendAge.shift();
console.log(friendAge);
friendAge.splice(0,2);
console.log(friendAge);

