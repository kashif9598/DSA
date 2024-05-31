// brute force approach
// function largestInArray(arr) {
//     arr.sort((a,b) => a - b);
//     return arr[arr.length-1]
// }

// optimal approach
const largestInArray = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
};

const arr1 = [8, 10, 5, 7, 9];
console.log(largestInArray(arr1));
