// 1.shift 
const numsArray=[1,2,302,34,4];
const stringArray = ["this", "is", "what" , "i", "want"];

const shiftArray = stringArray.shift()  //array me se first item ko delete karta hai and deleted item ko return karta hai
// console.log(shiftArray) 


// 2.unshift
const unshiftArray =stringArray.unshift(20,34,"dev") //array ke suru me items ko add karega and array ka length return karta hai 
console.log(unshiftArray)



console.log(stringArray,numsArray)// change the original array