//NUMBER GUESSING GAME

// this is the equation you need to generate a random number
const minNum = 1; 
const maxNum = 100; 
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer)

// lets create a variable to keep track of the attempts the user made

let attempt = 0; // this is the number of attempts the user made
let guess; // this is the number the user guessed
let running = true;

while(running){ // while running is true
guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`)
guess = Number(guess)
if(isNaN(guess)){// if the guess is not a number
    window.alert("Please enter a number")
    }
    else if(guess < minNum || guess > maxNum){ // if the guess is less than minNum or greater than maxNum
      window.prompt(`Please enter a valid number`)
    }
    else{
      attempt++; 
      if(guess < answer){ // if the guess is less than answer
        window.alert(`too low try again`)
        }
        else if (guess > answer){ //if the guess is greater than answer
          window.alert(`above limit try again`)
        }
        else{ // if the guess is equal to the answer
        window.alert(`CORRECT! the answer was ${answer} and it took you ${attempt} attempts`)
        running = false; // this will stop the loop
        // remember in javascript the code runs from top to bottom
        }
    }
}