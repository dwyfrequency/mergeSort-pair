const merge = (arrOne, arrTwo, newArr = []) => {
  if (arrOne.length && arrTwo.length) {
    if (arrOne[0] < arrTwo[0]) {
      newArr.push(arrOne.shift());
    } else {
      newArr.push(arrTwo.shift());
    }
    merge(arrOne, arrTwo, newArr);
  }
  // return newArr.concat(arrOne, arrTwo);
  return [...newArr, ...arrOne, ...arrTwo];
};

const mergeSort = arr => {
  // basecase len 1
  if (arr.length === 1) {
    return arr;
  }

  //splits given arr into arrays of length 1

  const midIndex = Math.floor(arr.length / 2);
  const arrayOne = mergeSort(arr.slice(0, midIndex));
  const arrayTwo = mergeSort(arr.slice(midIndex));

  // merge arrays of length 1 together
  return [].concat(merge(arrayOne, arrayTwo));
};

console.log(mergeSort([9, 8, 1, 4, 5]));
console.log(mergeSort([9]));
console.log(mergeSort([9, 2]));

// const mergeSort = arr => {
//   // basecase len 1
//   if (arr.length === 1) {
//     return arr;
//   }

//   //splits given arr into arrays of length 1

//   const midIndex = Math.floor(arr.length / 2);
//   const arrayOne = mergeSort(arr.slice(0, midIndex));
//   const arrayTwo = mergeSort(arr.slice(midIndex));

//   // merge arrays of length 1 together
//   return [].concat(merge(arrayOne, arrayTwo))

//   while (arrayOne.length && arrayTwo.length) {
//     if (arrayOne[0] < arrayTwo[0]) {
//       newArr.push(arrayOne.shift());
//     } else {
//       newArr.push(arrayTwo.shift());
//     }
//   }
//   return newArr.concat(arrayOne, arrayTwo);
// };

// console.log(mergeSort([9, 8, 1, 4, 5]));
// console.log(mergeSort([9]));
// console.log(mergeSort([9, 2]));
