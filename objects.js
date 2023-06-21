// Create and Modify Objects
// Send Feedback
// Write a JavaScript program to:
// 1. Create a student object with three properties: name, age, and roll no.
// 2. Create an object address with two properties, City and state and add this object property to the student object.
// 3. Now delete the roll no property.

var main = function () {
  // Use it to set the student and address objects
  let student, address;
  function setStudent() {
    // Update this function to set the student object (Step 1)
    student = {
      name: String,
      age: Number,
      rollNo: Number,
    };
  }

  function setAddressAndUpdateStudent() {
    // Update this function to set the address object and set the student object again (Step 2)
    address = {
      city: String,
      state: String,
    };
    student.address = address;
  }

  function deleteRollNumber() {
    // Update this function to remove 'roll no' property from the student object (Step 3)
    delete student.rollNo;
  }
  function getStudent() {
    return student;
  }
  function getAddress() {
    return address;
  }
  return {
    setStudent,
    setAddressAndUpdateStudent,
    deleteRollNumber,
    getStudent,
    getAddress,
  };
};
