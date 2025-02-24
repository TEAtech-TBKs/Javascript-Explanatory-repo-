//COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;
// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

let countLabel = document.getElementById("countLabel");
let count;
count = 0;
 

function increaseBtn() {
 
 count++;
 countLabel.textContent = count;
}

function decreaseBtn() {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
  }
 }

 
 function resetBtn() {
 
  count= 0;
  countLabel.textContent = count;
 }
