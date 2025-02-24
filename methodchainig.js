//METHOD CHAINING =  calling one method after another in one continous line of code

//------NO METHOD CHAINING----

// let user =  window.prompt("Enter your username")
// user = user.trim();//to remove any white space at the begining or end 
// let letter =  user.charAt(0); //get first letter
// letter =  letter.toUpperCase();// capitalize it
// let extracharacter= user.slice(1);
// extracharacter= extracharacter.toLowerCase();
// user = letter + extracharacter;
// console.log(user)

//------METHOD CHAINING-------
let user2 =  window.prompt("Enter your username2")
user2 =user2.trim().charAt(0).toUpperCase() + user2.trim().slice(1).toLowerCase();
console.log(user2);