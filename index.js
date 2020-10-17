/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email=document.getElementById("email-input")
const form=document.getElementById("myForm")

form.addEventListener("submit",function (e) {
    e.preventDefault()
    console.log("email: ",email.value)
})

//js for animating form-input label
$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue=$(this).val();
    if (inputValue=="") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
})
