function evenOdd(n) {
  return n % 2 === 0;
}
evenOdd(4) ? console.log("even") : console.log("ODD");

function evenOdd2(n) {
  if (n & (1 === 1)) {
    console.log("odd");
  } else {
    console.log("EVEN");
  }
}
evenOdd2(5);

function checkEvenOdd(n) {
  return n % 2 === 0 ? "Even" : "odd";
}
console.log(checkEvenOdd(4));
