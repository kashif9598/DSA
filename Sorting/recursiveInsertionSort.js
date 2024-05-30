function recursiveInsertionSort (arr, i, n){
    if (i==n) return;

    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
    }

    recursiveInsertionSort(arr, i+1, n);
    return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length
console.log(recursiveInsertionSort(arr, 0, n));