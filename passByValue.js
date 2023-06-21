/*
function f (a, b , c){
    a = 3;
    b.push("foo");
    c.first = false;
}

let x = 4;
let y = ["eeny", "miny", "mo"];
let z = {first: true};

f(x, y, z);
console.log(x, y, z);
*/

/*
Pass by Value
● In pass by value, the function is called by directly passing the variable's value
as the arguments.
● Changing the arguments inside the Function doesn't affect the variable
passed from outside the Function because parameters passed as an
argument create their own copy. So any changes made inside the Function
are not reflected in the original variable. This is called pass by value.
*/

function passByValue(varOne, varTwo) {
  console.log("Inside passByValue function");
  varOne = 50;
  varTwo = 100;
  console.log(varOne, varTwo);
}
let varOne = 15;
let varTwo = 30;
console.log("Before calling passByValue function");
console.log(varOne, varTwo);
passByValue(varOne, varTwo);
console.log("After calling passByValue function");
console.log(varOne, varTwo);
