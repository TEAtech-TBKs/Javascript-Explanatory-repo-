//SWITCH = is used to replace if else statement

let day = "salad";

if (day === 1){
    console.log("moday");
}
if (day === 2){
    console.log("tuesday");
}
if (day === 3){
    console.log("wednesday");
}

//INSTEAD

switch (day) {
    case 1 :
    console.log("monday");
    break;
    case 2 :
    console.log("tuesday");
    break;

    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("friday");
    break;
    default:
        console.log(`${day} is not a valid day`);
}

let daysA = "";
let period;
switch(true){
    case daysA >= 1 && daysA <= 1 :
        period = "mon";
        break;
    case daysA >= 2 && daysA <= 2 :
        period = "tue";
        break;
    case daysA >= 3 && daysA <= 3 :
        period = "wed";
        break;
        default:
            period = "input a valid week";
}
console.log(period);
