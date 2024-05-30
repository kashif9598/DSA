function countDuplicates(arr) {
    let duplicateCount = {};
    let uniqueArr = [];
    for (let i = 0; i<arr.length;i++){
        let value = arr[i];
        if(duplicateCount[value] === undefined){
            duplicateCount[value] = 1;
            uniqueArr.push(value);
        } else {
            duplicateCount[value]++;
        }
    }
    return { uniqueArr, duplicateCount}
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5];
const {uniqueArr, duplicateCount } = countDuplicates(arr);
console.log('uniqueArr', uniqueArr);
console.log('duplicateCount', duplicateCount);
