// 4.Write a function to find the nth Fibonacci number using iteration.

function nthFibonacci(n) {
  if (n <= 0) {
    return null; // Return null for invalid input
  } else if (n === 1 || n === 2) {
    return 1; // Return 1 for the first two Fibonacci numbers
  }

  let fib1 = 1; // Initialize the first Fibonacci number
  let fib2 = 1; // Initialize the second Fibonacci number
  let fib; // Initialize variable to store the current Fibonacci number

  // Iterate from the 3rd Fibonacci number up to the nth Fibonacci number
  for (let i = 3; i <= n; i++) {
    fib = fib1 + fib2; // Calculate the current Fibonacci number
    fib1 = fib2; // Update fib1 to the next Fibonacci number
    fib2 = fib; // Update fib2 to the next Fibonacci number
  }

  return fib;
}

console.log(nthFibonacci(7)); // Output: 13 (7th Fibonacci number)
