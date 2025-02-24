//IF STATEMENTS = if a condition is true, execute a code
// else something else

//e.g
// let age = 17;
// if (age >=18){
// console.log('you are old enough to enter this site')
// } 
// else{
//     console.log('you must be 18 to enter this site')
// }

//ACTUAL CODE
 const resultElement = document.getElementById('resultElement');
 const myText = document.getElementById('myText');
let age;
 function mySubmit(){
    age = myText.value;
    age = Number(age);
    if (age >= 100){
        resultElement.textContent = 'you are above age recuirement'
    }
    else if(age >=18){
        resultElement.textContent = 'Welcome New User'
    }
    else{
        resultElement.textContent = "you must reach age recuirement to access page"
    }

   
 }