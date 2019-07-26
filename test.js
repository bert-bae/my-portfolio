let arr = [4, 1, 2, 3, 5, 8, 7, 6];
let arr2 = [2, 3, 4, 1, 5]
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function minSwaps(array) {
  let swaps = 0;
  for (let i = 0; i < array.length; i++) {
    let position = arr[i] - 1;
    if (i === position) {
      continue;
    }
    swap(array, position, i);
    console.log(array);
    swaps++;
  }
  return swaps;
}

// minSwaps(arr);
minSwaps(arr2);