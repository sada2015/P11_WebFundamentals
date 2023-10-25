// Put your solution here
const devideArray = (numbers) => {
  const evenNums = [],
    oddNums = [];
  let evenFlag = false,
    oddFlag = false;
  numbers.forEach((element) => {
    if (element % 2 === 0) {
      evenFlag = true;
      evenNums.push(element);
    } else {
      oddFlag = true;
      oddNums.push(element);
    }
  });
  console.log("Even Numbers:", evenFlag ? evenNums : "None");
  console.log("Odd Numbers:", oddFlag ? oddNums : "None");
};
let nArray = [2, 4, 6, 8];
devideArray(nArray);
