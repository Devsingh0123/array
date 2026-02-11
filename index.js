const numsArray=[1,0,2,302000,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];


let map = numsArray.map(nums=>nums*2) //ha jo bhi operation karenge uss aaadhar par wo hame 1 new array return kar ke dega
console.log(map)

let filter = numsArray.filter(nums=>nums>2) //condition ke aadhar par hame result ke rup me 1 array return ker ke dega jo v hamare condition ko satisfy karega
console.log(filter)