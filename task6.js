const userMood = prompt("Який ваш настрій?");
let emoji;

switch (userMood.toLowerCase()) {
  case "щасливий":
    emoji = "😊";
    break;
  case "сумний":
    emoji = "😢";
    break;
  case "злюсь":
    emoji = "😠";
    break;

  default:
    emoji = "😐";
}

console.log("Ваш настрій: " + userMood);
console.log("Відповідний емодзі: " + emoji);
