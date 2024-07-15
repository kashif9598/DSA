// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order


// using JavaScript array methods
// function moveZeroes(arr){
//     let temp = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == 0){
//             arr.splice(i, 1);
//             temp.push(0);
//         }
//     }
//     arr = [...arr,...temp];
//     console.log("arr",arr);
//     // console.log("temp",temp);
// }

// brute force

// function moveZeroes(arr){
//     let temp = []
//     // push all non zero element in temp
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] != 0){
//             temp.push(arr[i])
//         }
//     }

//     // push all the non zero element in arr from beginning
//     let nz = temp.length;
//     for (let i =0;i<nz;i++){
//         arr[i] = temp[i];
//     }

//     // add all the non zer element from length of non zer element till the end 
//     for(let i=nz;i<arr.length;i++){
//         arr[i] = 0;
//     };
    
//     return arr;
// }

// optimal solution

function moveZeroes(arr){
    let j=-1;

    // find 1st zero element assign its index to j
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0){
            j = i;
            break;
        }
    }
    console.log(j);
    if (j >= 0){
    for(let i=j+1;i<arr.length;i++){
        if(arr[i] != 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++
        }
    }
}


    return arr;


}

let arr = [1,2,3,1]
console.log(moveZeroes(arr));