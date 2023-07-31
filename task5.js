const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const sumArray = array1
  .concat(array2)
  .reduce((total, current) => total + current, 0);

console.log("Сума елементів двох масивів: " + sumArray);
