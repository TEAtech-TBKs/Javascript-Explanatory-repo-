//random number generator
function myBtn() {
    randomNum1 = Math.floor(Math.random()* max)* min;
    randomNum2 = Math.floor(Math.random()* max)* min;
    randomNum3 = Math.floor(Math.random()* max) * min;
    randomNum4 = Math.floor(Math.random()* max) * min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    label4.textContent = randomNum4;
}
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 9;
let randomNum1;
let randomNum2;
let randomNum3;

