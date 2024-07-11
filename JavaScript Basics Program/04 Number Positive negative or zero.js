const input = prompt("Enter a number");

if (isNaN(input)) {
  console.log(isNaN(input));
  console.log("Invalid input , please enter valid input");
} else {
  input === 0
    ? console.log("Number is Zero")
    : input >= 0
    ? console.log("number is positive")
    : console.log("number is negative");
}
