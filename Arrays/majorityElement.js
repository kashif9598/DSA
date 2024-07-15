// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Brute force
// function majorityElement(nums){
//     let n = nums.length;
//     for(let i=0;i<n;i++){
//         let count = 0;
//         for(let j=0;j<n;j++){
//             if(nums[j] === nums[i]){
//                 count++;
//             }
//         }
//         if(count > Math.floor(n/2)) return nums[i]
//     }
//     return -1;
// }

// better approach -MAP
// function majorityElement(nums) {
//   let n = nums.length;
//   const map = new Map();

//   // storing in map
//   for (let i = 0; i < n; i++) {
//     const num = nums[i];
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }

//   for ([num, count] of map) {
//     if (count > Math.floor(n / 2)) {
//       return num;
//     }
//   }
//   return -1;
// }

//optimal approach Moore's Voting Algo

function majorityElement(nums){
    let n = nums.length;
    let el;
    let count = 0;

    // moore's algo
    for(let i=0;i<n;i++){
        if(count == 0){
            el = nums[i];
            count = 1;
        } else if (el === nums[i]){
            count++;
        } else {
            count--;
        }
    }
    return el

    // check if the stored element is majority - (Ignore if majority element always present)
    let count1 = 0
    for(let i=0;i<n;i++){
        if(nums[i] === el){
            count1++;
        }
    }
    if(count1 > Math.floor(n/2)){
        return el
    }
    return -1
}

let nums = [2,2,2,1,1,2,1]
console.log(majorityElement(nums));
