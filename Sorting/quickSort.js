function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i<j){
        while(arr[i] <= pivot && i<=high-1){
            i++;
        }
        while(arr[j]>pivot && j>=low+1){
            j--;
        }
        if(i<j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

function quickSort(arr, low, high) {
    if(low < high) {
        pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex-1);
        quickSort(arr, pIndex+1, high);
        return arr;
    }
}

const arr = [4,1,7,9,3];
let low = 0;
let high = arr.length - 1;
let resullt = quickSort(arr,low,high)
console.log(resullt);