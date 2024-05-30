function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid+1;

    while(left<=mid && right<=high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        } 
        else {
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++
    }
    while(right<=high){
        temp.push(arr[right]);
        right++
    }
    
    for(let i = low;i<=high;i++){
        arr[i] = temp[i-low];
    }
    return arr;
}

function mergeSort(arr, low, high) {
    if(low === high) return;
    let mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high)
    return arr;
}


const arr = [3,2,8,5,1,4,23];
let low = 0;
let high = arr.length - 1;
console.log(mergeSort(arr,low,high));
