// Swap Number

// let a=10
// let b=20
// let temp;

// console.log('before swaping values',a)
// console.log('before swaping values',b)

// temp=a
// a=b
// b=temp

// console.log('after swapping',a)
// console.log('after swapping',b)

let a = 10;
let b = 50;
// console.log('before swaping values',a)
// console.log('before swaping values',b)

// a=a+b
// b=a-b
// a=a-b

// console.log('after swapping',a)
// console.log('after swapping',b)
// console.log('before swaping values',a)
// console.log('before swaping values',b)
// [b,a]=[a,b];

console.log("before swaping values", a);
console.log("before swaping values", b);

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("after swapping", a);
console.log("after swapping", b);
