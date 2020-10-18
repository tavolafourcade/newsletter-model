/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

var email = document.getElementById("email-input");
var form = document.getElementById("myForm");
var submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', function () {
  console.log("email: ", email.value);
  alert("Thank you! Your message has been received!");
});