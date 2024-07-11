// function sumOfAll(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(sumOfAll(6))

function sum(n) {
  if (n !== 0) {
    return n + sum(n - 1);
  }
  return n;
}
console.log(sum(7));
