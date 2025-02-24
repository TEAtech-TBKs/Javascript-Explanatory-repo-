//STRING SLICING- this is used to create a sub-string from a portion another string
//slice(start,  end)
const fullname = "esther Akinwale";

let firstname = fullname.slice(0, 7);
let surname = fullname.slice( 7, 17  );// for th eending index if you don;t add 17 to the ending index it would still work the same
console.log(surname);
console.log(firstname);


const Name = "Adrian Owofedaju"
let first =  Name.slice(0,Name.indexOf(""))
let last =  Name.slice(Name.indexOf("")+6)
console.log(first)
console.log(last)

const email= "adrian@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username)
console.log(extension)
 