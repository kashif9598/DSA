// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function leftRotate(arr){
    let temp = arr[0];
    let n = arr.length
    for(let i=1;i<n;i++){
        arr[i-1] = arr[i];
    }
    arr[n-1] = temp;
    return arr;
}

// function rightRotate(arr, k){
    
// }


let nums = [1,2,3,4,5,6,7];
let k = 3
console.log(rightRotate(nums, k));
let arr = [1,2,3,4,5,6,7]
console.log(leftRotate(arr));