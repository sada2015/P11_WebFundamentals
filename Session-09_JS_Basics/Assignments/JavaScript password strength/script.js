// Your solution goes here
const isStrongPassword = (pass) => {
  if (pass.length < 8) {
    console.log(" false - Too short ");
    return false;
  } else if (pass.includes("password")) {
    console.log('false - Contains "password"');
    return false;
  } else if (pass.match("^[A-Z]+$]")) {
    console.log("false - No uppercase characters");
    return false;
  } else {
    console.log("Password is very Strong");
    return true;
  }
};

isStrongPassword("Qwerty"); // false - Too short
isStrongPassword("passwordQwerty"); // false - Contains "password"
isStrongPassword("qwerty123"); // false - No uppercase characters
isStrongPassword("Qwerty123"); // true
