function validateNotEmpty(x, y){
  var input = document.getElementById(x).value;
  if (input == ""){
    document.getElementById(y).innerHTML = "This field must not be empty.<br/><br/>";
    return false;
  }
  return true;
}

function validateEmail(x){
  var atCount = 0;
  for (var i = 0; i < x.length; i++){
    if (x[i] == '@'){
      atCount++;
    }
  }
  var pattern = /\S+@\S+\.[(com)|(edu)|(net)]/;
  var match = pattern.test(x);

  if ((!match) || (atCount != 1)){
    return false;
  }
  else {
    return true;
  }
}

function validateNumber(x){
  var pattern1 = /^0\d{8}/;
  var pattern2 = /^02\d{8}/;

  if ((pattern1.test(x)) || (pattern2.test(x))){
    return true;
  }
  else {
    return false;
  }
}

function validateRegistrationForm(){
  document.getElementById("validateFname").innerHTML = "";
  document.getElementById("validateLname").innerHTML = "";
  document.getElementById("validateAddress").innerHTML = "";
  document.getElementById("validateNumber").innerHTML = "";
  document.getElementById("validateEmail").innerHTML = "";
  document.getElementById("validateUserReg").innerHTML = "";
  document.getElementById("validatePassReg").innerHTML = "";
  document.getElementById("validateConPass").innerHTML = "";

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var conpass = document.getElementById("conpass").value;

  var error = false;

  if (!(validateNotEmpty('fname', 'validateFname'))){
    error = true;
  }
  if (!(validateNotEmpty('lname', 'validateLname'))){
    error = true;
  }
  if (!(validateNotEmpty('address', 'validateAddress'))){
    error = true;
  }
  if (!(validateNotEmpty('number', 'validateNumber'))){
    error = true;
  }
  if (!(validateNotEmpty('email', 'validateEmail'))){
    error = true;
  }
  if (!(validateNotEmpty('user', 'validateUserReg'))){
    error = true;
  }
  if (!(validateNotEmpty('pass', 'validatePassReg'))){
    error = true;
  }
  if (!(validateNotEmpty('conpass', 'validateConPass'))){
    error = true;
  }
  if (user.length < 6){
    document.getElementById("validateUserReg").innerHTML = "Username must be at least 6 characters.";
    error = true;
  }
  if (pass.length < 6){
    document.getElementById("validatePassReg").innerHTML = "Password must be at least 6 characters.";
    error = true;
  }
  if (pass != conpass){
    document.getElementById("validateConPass").innerHTML = "Confirm password field must match the password field.";
    error = true;
  }
  if (!(validateEmail(email))){
    document.getElementById("validateEmail").innerHTML = "Invalid email";
    error = true;
  }
  if (!(validateNumber(number))){
    document.getElementById("validateNumber").innerHTML = "Invalid number";
    error = true;
  }

  if (error){
    return false;
  }
  else {
    alert("Registration Successful!");
    return true;
  }
}

function validateLoginForm(){
  document.getElementById("validateUserLog").innerHTML = "";
  document.getElementById("validatePassLog").innerHTML = "";
  var user = document.getElementById("userlog").value;
  var pass = document.getElementById("passlog").value;
  if (!(validateNotEmpty('userlog', 'validateUserLog'))){
    return false;
  }
  else if (!(validateNotEmpty('passlog', 'validatePassLog'))){
    return false;
  }
  else if (user == "kelsey" && pass == "1234"){
    alert("Login Successful!");
    return true;
  }
  else {
    document.getElementById("validatePassLog").innerHTML += "Invalid username and password combination.<br/><br/>";
    return false;
  }
}

function validateSearchForm(){
  document.getElementById("validateSearch").innerHTML = "";
  var title = document.getElementById("titleSearch").value;
  var author = document.getElementById("authorSearch").value;

  if ((title == "") && (author == "")){
    document.getElementById("validateSearch").innerHTML = "You must enter at least a title or an author to search for a book.";
    return false;
  }
  else {
    alert("Search Successful!");
    return true;
  }
}

function validateAddForm(){
  document.getElementById("validateTitleAdd").innerHTML = "";
  document.getElementById("validateAuthorAdd").innerHTML = "";
  document.getElementById("validateConditionAdd").innerHTML = "";

  var title = document.getElementById('titleAdd').value;
  var author = document.getElementById('authorAdd').value;
  var condition = document.getElementById('conditionAdd').value;

  var error = false;

  if (!(validateNotEmpty('titleAdd', 'validateTitleAdd'))){
    error = true;
  }
  if (!(validateNotEmpty('authorAdd', 'validateAuthorAdd'))){
    error = true;
  }
  if (!(validateNotEmpty('conditionAdd', 'validateConditionAdd'))){
    error = true;
  }

  if (error){
    return false;
  }
  else {
    alert("Book added successfully!");
    return true;
  }
  // var title = validateNotEmpty((document.getElementById("titleAdd").value), "validateTitleAdd");
  // var author = validateNotEmpty((document.getElementById("authorAdd").value), "validateAuthorAdd");
  // var condition = validateNotEmpty((document.getElementById("conditionAdd").value, "validateConditionAdd");
  //
  // if (title && author && condition){
  //   alert("Book added successfully!");
  //   return true;
  // }
  // else {
  //   return false;
  // }
}

function validateDelForm(){
  document.getElementById("validateTitleDel").innerHTML = "";
  document.getElementById("validateAuthorDel").innerHTML = "";

  var title = validateNotEmpty((document.getElementById("titleDel").value, "validateTitleDel");
  var author = validateNotEmpty((document.getElementById("authorDel").value, "validateAuthorDel");

  if (title && author){
    alert("Book deleted successfully!");
    return true;
  }
  else {
    return false;
  }
}
