// Your solution goes here
const playGuessingGame = (numToGuess, totalGuesses) => {
  for (let i = 0; i < totalGuesses; i++) {
    let inputVal = prompt("Enter Number Between 1 and 100", "");
    if (isNaN(+inputVal)) {
      alert("Please Enter a Number");
    } else {
      if (+inputVal < numToGuess) {
        totalGuesses--;
        alert("Number is Too Small");
      } else if (+inputVal > numToGuess) {
        totalGuesses--;
        alert("Number is Too Large");
      } else if (+inputVal === numToGuess) {
        alert(
          "Thats a Correct Guess and you did It in " +
            totalGuesses +
            " of Tries"
        );
        break;
      }
    }
  }
};

playGuessingGame(5, 3);
