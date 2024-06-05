// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.


// ---- Left Rotate--------//
// function rotateArrayByK(arr,k){
//     let n = arr.length;
//     k=k%n;
//     let temp = [];
//     // copy first k elements in temp array
//     for (let i =0;i<k;i++){
//         // temp[i] = arr[i]
//         temp.push(arr[i])
//     };

//     // shift arr elements 
//     for(let i=k;i<n;i++){
//         arr[i-k] = arr[i];
//     }

//     //copy to main arr
//     for(let i=n-k;i<n;i++){
//         arr[i] = temp[i-(n-k)]
//     }
//     return arr;
// }


// using Javascript Array methods
//  -------- right rotate -------- 

// function rotateArrayByK(arr,k){
//     for(let i=0;i<k;i++){
//         arr.unshift(arr.pop())
//         console.log(`Iteration ${i}`, arr);
//     }
// }

// left rotate 

function rotateArrayByK(arr,k){
    for(let i=0;i<k;i++){
        arr.push(arr.shift())
        console.log(`Iteration${i}`,arr);
    }
}

let arr = [3,7,8,9,10,11]
let k = 3
console.log(rotateArrayByK(arr,k))