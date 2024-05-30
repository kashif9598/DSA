function recursiveBubbleSort(arr, n) {
    if (n==1) return;

    let didSwap = false;
    for (let j=0;j<n-1;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            didSwap=true;
        }
    }
    if (!didSwap) return
    recursiveBubbleSort(arr, n-1)
    return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length
// let arr = [1,2,3,4,5,6,7,8,9]
console.log(recursiveBubbleSort(arr, n));