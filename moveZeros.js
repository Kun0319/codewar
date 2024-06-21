function moveZeros(arr) {
    let j = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            newArr[j] = arr[i];
            j++;
        }
    }
    for (; j < arr.length; j++) {
        newArr[j] = 0;
    }
    return newArr;
}
  console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));