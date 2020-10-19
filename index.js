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

form.addEventListener("mouseover",function (e) {
    e.preventDefault()
    email.style.background = "linear-gradient(to right, purple,red, pink)"
    email.style.color = "white"
})

form.addEventListener("mouseleave",function (e) {
    e.preventDefault()
    email.style.background = "white"
    email.style.color = "black"
})
