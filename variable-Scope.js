//variable scope=  when  certain variable is recognized and accessible
// Global scope= variable is recognized by the program
// Local scope= variable is recognized by the program
//in this session the difference between Global and local scope would be explained

//Local sscope
function functionL1(){
let output = "I am a local variable";
console.log(output);
}
function functionL2(){
let output = "I am another local variable";
console.log(output);
}
//if you notice both functions above have the same variable name but not the same value
functionL1();

// to display the message in your console you need to call the function
//if you replace L1() with L2() you would get a different output
//though both have the same variable name there are no errors like E.G(the variable As already been declared)

//Global Scope
//the variable is declared outside the fuction

let new_Output = 5;

functionG1()//call function
//in global scope the variable is recognized globally
function functionG1(){
  // let new_Output = 10;
  console.log(new_Output);
  }
  function functionG2(){
  // let new_Output = 11;
  console.log(new_Output);
  }
  // the output would be 5 because the variable is recognized globally BUT if you uncomment the let new_Output = 10; the output would be 10, as the local scope would first be recognized