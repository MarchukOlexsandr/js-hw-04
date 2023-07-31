const programmingLanguages = ["Pyton", "C++", "C#", "PHP"];
const valueToCheck = "Java Script";

if (!programmingLanguages.includes(valueToCheck)) {
  console.log("Значення Java Script в списку немає, додаємо в масив.");
  programmingLanguages.push(valueToCheck);
}

console.log(programmingLanguages);
