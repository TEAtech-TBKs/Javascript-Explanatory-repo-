//STRING  METHOD- allows manipulation of text
//indexOf()- 
//lastindexOf()- 
//chartAt() -
//length
// trim()- 
//toUpperCase()
//repeat
//includes()
//padStart()- determine how many character you want a string or numbers to be
//startswith()-check if it starts with a certain number or string.
//endsWith()- check if it end with a certain character or number or string
let username = 'Hadassah Is Tall, ';

console.log(username.indexOf("h"));
console.log(username.lastIndexOf("h"));
console.log(username.charAt("7"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(5));
console.log(username.startsWith(''));
console.log(username.includes('Hadassah')); //here we are checking if username has the name Hadassah

//replaceAll()

let motto = "Aesign is intelligence made visible";
motto = motto.replaceAll('A', 'D')

console.log(motto)
let phoneNumber= " 70-3510-1578";
phoneNumber= phoneNumber.padStart(17,"+123")
phoneNumber= phoneNumber.replaceAll("-"," ")
console.log(phoneNumber)



