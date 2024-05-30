function bubbleSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
// let arr = [1,2,3,4,5,6,7,8,9]
console.log(bubbleSort(arr));
