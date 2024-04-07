// 3. Write a function to find the second largest element in an array.

function findSecondLargestElement(arr) {
  if (arr.length < 2) {
    return null; // Return null if the array has less than 2 elements
  }

  let largest = arr[0]; // Initialize the largest element as the first element
  let secondLargest = arr[1]; // Initialize the second largest element as the second element

  // Swap largest and second largest if necessary
  if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  // Iterate through the array starting from the third element
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // Update second largest
      largest = arr[i]; // Update largest
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]; // Update second largest
    }
  }

  return secondLargest;
}

const array = [5, 2, 10, 9, 3];
console.log("Second largest element:", findSecondLargestElement(array)); // Output: 9
