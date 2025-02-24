//LOGICAL OPERATOR- used to combine or manipulate boolean values

//--&&-AND = this checks if your two condition are true and return the value
//--||- OR = this checks the two codition if one of the condition is true it returns the value
//--!-NOT
const temp = 31;
if(temp > 0 && temp<= 30){
    console.log("the weather is good");
}
else(
    console.log("the weather is Bad")
)

const temp2 =56 ;
if(temp <= 0 || temp > 30){
    console.log("the weather is bad");
}
else(
    console.log("the weather is good")
)

const isSunny = true;

if (!isSunny){ //basically mean if its not(!)true console.log the following bellow
    console.log("it is CLOUDY ");
}
else{
    console.log("it's SUNNY")
}