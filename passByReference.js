/*
Pass by Reference
● In Pass by Reference, Function is called by directly passing the
reference/address of the variable as an argument.
● Parameters passed as an argument do not create their own copy. It refers to
the original value, so changes inside Function affect the original value.
● In Javascript, objects and arrays follow pass by reference.

*/

function passByReference(Obj, arr) {
  console.log("Inside passByReference function");
  Obj.a = 10;
  arr.push("bob");
  console.log(Obj, arr);
}
let Obj = { a: 15 };
let arr = ["raj", "rahul"];
console.log("Before calling passByReference function");
console.log(Obj, arr);

passByReference(Obj, arr);
console.log("After calling passByReference function");
console.log(Obj, arr);
