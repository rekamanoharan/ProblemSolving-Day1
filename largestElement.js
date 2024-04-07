// 2.Write a function to find the largest element in an array.

function findLargestElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0]; // Initialize the largest element as the first element

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update the largest element if a larger element is found
    }
  }

  return largest;
}

const array = [5, 2, 30, 8, 3];
console.log("Largest element:", findLargestElement(array)); // Output: 30
