// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

//===

const PI = 3.14;

if(PI === 3.14){// if the comparison operator == is used instead and 3.14 is then added in a string(PI == "3.14") it would be correct but in case of === it would be incorrect because the datatype which is a string would be considered incorrect 
    console.log("you are right")
}
else{
    console.log("incorrect")
}

if(PI !== "3.14"){//if PI is not equals to
    console.log("incorrect")
}
else{
    console.log("you are right")
}