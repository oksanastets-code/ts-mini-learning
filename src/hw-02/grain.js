/* eslint-disable no-loop-func */
function loadGrain(levels) {
  let grain = 0;

  let array = [...levels];

  let iter = Math.max(...array);

    for (let i = 1; i <= iter; i++) {
      
    //   робим трім, обрізаєм крайні елементи масиву, якщо вони 0
    do {
      if (array[0] === 0) {
        array.shift();
      }
      if (array[array.length - 1] === 0) {
        array.pop();
      }
      console.log(array);
    } while (
      array[0] === 0 ||
      array[array.length - 1] === 0
    );

    //   перевіряєм, чи є 0, тоді заповнюєм комірку
    array.forEach((item, index, arr) => {
      if (item === 0) {
        arr[index] = item + 1;
        grain += 1;
      }
      return arr;
    });

    //   знімаєм нижній рівень
    array.forEach(
      (item, index, arr) =>
        (arr[index] = item - 1),
    );
  }
  return grain;
}

// console.log(loadGrain([4, 1, 3]));
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
// console.log(loadGrain([2, 0, 1, 5, 2, 7]));
// console.log(loadGrain([2, 4, 2]));
// console.log(loadGrain([7, 4]));
// console.log(loadGrain([]));
console.log(
  loadGrain([10, 5, 6, 2, 8, 1, 1, 1, 0, 5, 10]),
); //61


