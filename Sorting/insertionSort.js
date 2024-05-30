function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

const arr = [13, 46, 24, 52, 20, 9];
console.log(insertionSort(arr));
