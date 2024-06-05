// Example 1:
// Input:
//  [1,2,4,7,7,5]
// Output:
//  Second Smallest : 2
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input:
//  [1]
// Output:
//  Second Smallest : -1
// 	Second Largest : -1
// Explanation:
//  Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

// algorithm
// sort the array
// make last element as largest 
// 

// brute force
// function secondLargest (arr) {
//     let n = arr.length;
//     if(n<=1) return -1
//     arr.sort((a,b) => a-b);
//     let max = arr[n-1];
//     let secondMax = arr[0]
//     for (let i=0;i<n-1;i++){
//         if(arr[i] > secondMax && arr[i] < max){
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
// }

//optimal approach
function secondLargest(arr) {
    let n = arr.length
    if(n < 2) return -1;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i=0;i<n;i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i]
        } else if (arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return secondMax === -Infinity ? -1 : secondMax;
}

//second Smallest

// function secondSmallest(arr){
//     let n = arr.length;
//     let min = Infinity;
//     let secondMin = Infinity;
//     if(n<2) return -1;

//     for(let i=0;i<n;i++){
//         if(arr[i]<min){
//             secondMin = min;
//             min = arr[i]
//         } else if(arr[i]<secondMin && arr[i] !== min){
//             secondMin = arr[i]
//         }
//     }
//     return secondMin;
// }

let arr = [28, 43, 26, 65, 60, 54, 51, 35, 42, 48, 33, 40, 58, 38, 64, 47, 44, 49, 46, 25, 57, 39, 55 ,45, 29,32 ,61, 53, 31, 36, 56, 63, 30, 52, 27, 34, 50, 41 ,37, 66, 62, 59]
// let arr = [66, 66, 66, 66, 66, 66]
console.log(secondLargest(arr));
// console.log(secondSmallest(arr));