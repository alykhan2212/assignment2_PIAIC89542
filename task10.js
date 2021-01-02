const pass = "password123";

let inputPass = prompt("Please enter password: ");

if (!inputPass) {

  alert("Please enter your password");

} else if (inputPass === pass) {
  
  alert("Correct! The password you entered matches the original password. ");

} else {
 
  alert("Incorrect password");

}