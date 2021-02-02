const args = process.argv;
const userInput = args.slice(2, args.length);

const pigLatin = function(userInput) {
  let firstLetter = '';
  let igpayAtinlay = '';
  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < userInput[i].length; j++) {
      if (j === 0) {
        firstLetter += userInput[i][j];
      }
      if (j !== 0 && j <= userInput[i].length - 1) {
        igpayAtinlay += userInput[i][j];
      }
      if (j === userInput[i].length - 1) {
        igpayAtinlay += `${firstLetter}ay `;
      }
    }
  }
  return igpayAtinlay;
};

console.log(`words to convert to piglatin: ${userInput}`);
console.log(pigLatin(userInput));