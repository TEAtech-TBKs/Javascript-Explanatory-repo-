// loop =  repeats some code until a condition is met or true
// if your condition is true it would run your code infinitiely thats what we describe as an infinite loop

let username = "";

while(username === "" || username === null){
  username = window.prompt("Enter your name:")
}

console.log(`Hello ${username}`)

or

/* do{
  username = window.prompt("Enter your name:")
}
while(username === "" || username === null)

*/

