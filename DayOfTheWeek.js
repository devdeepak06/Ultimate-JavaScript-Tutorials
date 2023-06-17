// Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
// (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
// If the number is less than 1 or greater than 7, the function should return null.
// Note: Store the days of the week in the array:



const num = 5;
const returnDay = num => {
   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   if(num < 1 || num > 7){
      return null;
   }
   return days[num - 1];
};
// console.log(returnDay(1));
// console.log(returnDay(2));
// console.log(returnDay(3));
// console.log(returnDay(4));
// console.log(returnDay(5));
// console.log(returnDay(6));
// console.log(returnDay(7));
// console.log(returnDay(8));
// console.log(returnDay(0));

// console.log("The day of the week is: " + returnDay(num));

console.log(returnDay(num));