// 5.Write a function to calculate the factorial of a number using iteration.

function factorial(n) {
  if (n < 0) {
    return null; // Factorial is not defined for negative numbers
  }

  let result = 1;

  // Multiply all integers from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(3)); // Output:6
