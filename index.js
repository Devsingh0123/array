
const numsArray=[1,2,302,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];




// 1.toShorted
const toShortedArray =numsArray.toSorted((a,b)=>a-b)  
// console.log(toShortedArray) //smame sort ki tarah use hota hai difference sirf itna hi hai ki ye new array return karta hai original array ko change nhi karta hai


// 2.toReversed
const toReversedArray =numsArray.toReversed()  
console.log(toReversedArray) //smame reverse ki tarah use hota hai difference sirf itna hi hai ki ye new array return karta hai original array ko change nhi karta hai


console.log(stringArray,numsArray) //return new array