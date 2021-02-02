const args = process.argv;
const userInput = args.slice(2, args.length);
//bring in only user arguments and not node path etc.
const reverseIt = function(userInput) {
//loop through each arg then through each element of each arg in reverse and add to new string.
  let reversed = '';
  for (let i = 0; i < userInput.length; i++) {
    for (let j = userInput[i].length - 1; j >= 0; j--) {
      reversed += userInput[i][j];
      if (j === 0) {
        reversed += '\n';
      }
    }
  }
  return reversed;
};
console.log(`You want to reverse the following: ${userInput}`);
console.log(reverseIt(userInput));