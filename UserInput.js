// How to accept user input

// 1. EASY WAY = Window prompt
// 2. PROFESSIONAL WAY = html textbox

// let userName;
// username = windows.prompt()

let userName;
document.getElementById("submit").onclick = function(){
  userName = document.getElementById('name').value;
  document.getElementById('wll').textContent = `Hello ${userName}`;
  console.log(userName);
}