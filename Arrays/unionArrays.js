// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
// Example 1:
// Input:

// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

function unionArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a,b)=>a-b);
}

let arr1 = [-7, 8];
let arr2 = [-8, -3, 8];
console.log(unionArrays(arr1, arr2));
