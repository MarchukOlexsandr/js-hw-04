const originalArray = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
const resultArray = originalArray.map((item) => item.split("-")[1]);

console.log(resultArray);
