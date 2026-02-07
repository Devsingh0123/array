
const numsArray=[1,0,2,302,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];




// 1.indexOf
console.log(numsArray.indexOf(0));//returns first element's index of an array
console.log(stringArray.indexOf("Is"));//case sensitive
// if element is not found then return -1



// 2. includes
console.log(numsArray.includes(0))//if element is present in an array then return true otherwise false
console.log(stringArray.includes("Is"))//also case sensitive

//3. lastIndexOf
console.log(numsArray.lastIndexOf(0)) // if there is more than 1 same element found in an array then it is returns the last element's index of an arrray
// if elemaent is not found in an array then returns -1