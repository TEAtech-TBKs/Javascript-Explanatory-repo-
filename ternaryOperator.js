//TERNARY OPERATOR - a shortcut to if and else statements helps to assign a variable based on a condition ? codeiftrue : codefalse;

let age = 23;
// '?' can also mean "is it true" and ':' can also mean "if not"
let message = age >= 18 ? console.log("you're an adult") : console.log("you're a minor");
console.log(message)

//SHORTCUT FOR

if(age >= 18){
    message= console.log("you are adult")
}
else{
    message = console.log("you're a minor")
}