// 1.Short
// element or charactor shorting
const stringArray = ["this", "is", "what" , "i", "want"];
console.log(stringArray.sort())

// number shorting
const numsArray=[1,2,302,34,4,5,6,7,8,9,0];
console.log(numsArray.sort((a,b)=>a-b))  //accending order
console.log(numsArray.sort((a,b)=>b-a))  //decending order
