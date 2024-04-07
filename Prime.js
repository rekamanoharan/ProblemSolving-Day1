// 1. Explain the concept of prime numbers and write a function to check if a given number is prime.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(number) {
  if (number <= 1) {
    return false; // 1 and numbers less than 1 are not prime
  }

  if (number <= 3) {
    return true; // 2 and 3 are prime
  }

  // If the number is divisible by 2 or 3, it's not prime
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5)); // Output: true
console.log(isPrime(10)); // Output: false
