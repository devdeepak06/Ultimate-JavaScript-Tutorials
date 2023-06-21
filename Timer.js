/* 
Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output. 
*/

// Expected Output:
// Hello ninjas!
// 1
// 2
// 3
// 4
// 5

// function greet() {
//   console.log("Hello ninjas!");
// }
// let count = 1;
// function timer() {
//   if (count == 6) {
//     clearInterval(id);
//     return;
//   }
//   console.log(count);
//   count++;
// }
// let n = 1000;
// let id = setInterval(timer, n);
// n+=1000;
// greet();

// function timer() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(
//       function () {

//           }
//     );
//     console.log("Hello ninjas!");
//   }
// }
// timer();


setTimeout(function () {
    console.log("a")
  },20)
  setTimeout(function () {
    console.log("b")
  })
  console.log("c")