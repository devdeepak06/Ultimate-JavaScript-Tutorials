// Implement a function “duplicate” to duplicate an array, as shown below:
// For input arr=[1,2] duplicate(arr) should return [1,2,1,2]
//Test Cases
// console.log(duplicate([1, 2])); // [1,2,1,2]
// console.log(duplicate([1, 2, 3])); // [1,2,3,1,2,3]
// console.log(duplicate(["a", "b", "c", "d"])); // ["a","b","c","d","a","b","c","d"]

const duplicate = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return arr.concat(newArr);
};

//take user input and convert to array of numbers to test function duplicate
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a list of numbers separated by a space: ", (input) => {
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  console.log(duplicate(arr));
  readline.close();
});
