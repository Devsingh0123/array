
const numsArray=[1,0,2,302000,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];
 

// 1.Array.isArray
// const isArray =Array.isArray(numsArray) //returns true or false 


// 2.keys()-> iskso ham for of loop ke sath use karte hain and ye object and array dono par lagata hai and hame array ke case me index dega and object ke case me object keys dega and ye array ke form me keys ko return karega
// for (let keys of stringArray.keys()){
//     console.log(keys)
// }


// 3.keys()-> iskso ham for of loop ke sath use karte hain and ye object and array dono par lagata hai and hame array ke case me array ka values dega and object ke case me object ka values dega and ye array ke form me values ko return karega
// for (let values of numsArray.values()){
//     console.log(values)
// }


// 4.ham array and object ka index and keys respectevely, ko in operator ke help se bhi nikal sakte hain ye bhi hame index or kays ka array hi return karega 
// for(let keys in numsArray){
// console.log(keys)
// }


// 5.ham array and object ka values ko of operator ke help se bhi nikal sakte hain ye bhi hame values ka array hi return karega 
// for(let values of numsArray){
// console.log(values)
// }


// 6.entries -> ye hame array ka index ke sath value ka pair return karta hai 
// for(let [a,b] of numsArray.entries()){
// console.log(a,b)
// }


let [a,b] =numsArray.entries() // yaha par a=[index,value],b=[index,value] iss tarike se answer aayega

console.log(a,b)



//bojects ke liye kaise use karenge

let obj ={
    name:"dev",
    age:20
}
let [x,y] =Object.entries(obj)
console.log(x,y)

// object ke case me iss tarah se use karenge 
// console.log(Object.keys(obj))
// console.log(Object.values(obj))