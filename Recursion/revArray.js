// Problem Statement: You are given an array. The task is to reverse the array and print it. 

// Examples:

// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

// Example 2:
// Input: N=6 arr[] = {10,20,30,40}
// Output: {40,30,20,10}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.


// Iterative Method
// function revArray(arr, n){
//     let p1 = 0;
//     let p2 = n-1;
//     while(p1 <= p2) {
//         let temp = arr[p1];
//         arr[p1] = arr[p2];
//         arr[p2] = temp;
//         p1++;
//         p2--;
//     }
//     return arr;
// }

// let arr = [5, 4, 3, 2, 1];
// let n = 5
// console.log(revArray(arr, n));

// recursive method
function revArray(arr,i, n){
    if (i >= n/2) return;
    let temp = arr[i];
    arr[i] = arr[n-i-1];
    arr[n-i-1] = temp;
    revArray(arr, i+1, n)
    return arr;
}
let arr = [5,4,3,2,1];
let n = 5;
console.log(revArray(arr, 0, n))