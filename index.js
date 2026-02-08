
const numsArray=[1,0,2,302000,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];


// methods for converting an array into string

// 1.join
// let newArray = numsArray.join(" ") 
// console.log(newArray)

// console.log(typeof(newArray))



// 2.toString
// let newArray = numsArray.toString()
// console.log(newArray)

// console.log(typeof(newArray))



// 2.toString
let newArray = numsArray.toLocaleString() //ye toString ki tarah hi hai bas ye readiblity inhance karta hai 
console.log(newArray)

console.log(typeof(newArray))