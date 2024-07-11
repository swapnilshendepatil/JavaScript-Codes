function palindromeNum(n) {
  let number = n.toString();
  let originalNumber = number.split("").reverse().join("");
  if (number === originalNumber) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
  console.log(originalNumber);
}

palindromeNum(122221);
