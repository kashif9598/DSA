function selectionSort(arr) {
    let n = arr.length;
    for(let i=0;i<=n-2;i++){
        let min = i;
        for (let j=i;j<=n-1;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const arr = [13,46,24,52,20,9];
console.log(selectionSort(arr));