const numsArray=[1,0,2,302000,34,4,0];
const stringArray = ["this", "is", "what" , "i", "want"];


// let map = numsArray.map(nums=>nums*2) //ha jo bhi operation karenge uss aaadhar par wo hame 1 new array return kar ke dega
// console.log(map)

// let filter = numsArray.filter(nums=>nums>2) //condition ke aadhar par hame result ke rup me 1 array return ker ke dega jo v hamare condition ko satisfy karega
// console.log(filter)
// console.log(numsArray.length)



// function largest (numsArray){
// let large=0;
// let secondLarge = 0;
// for (let i = 0; i < numsArray.length; i++){

// if(numsArray[i] >large){
// secondLarge = large;
// large=numsArray[i]
// }


// }
// return secondLarge


// }

// console.log(largest(numsArray))


let secondLargest = (arr) => {
    let large = -Infinity;
    let secLarge = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            secLarge = large;
            large = arr[i];
        } 
        else if (arr[i] > secLarge && arr[i] !== large) {
            secLarge = arr[i];
        }
    }

    return secLarge;
}

console.log(secondLargest(numsArray));



// let secLargeElementInArray = (arr) => {
//     let large = -1;
//     let secondLarge = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > large){
//             large = arr[i];
//         }
//     }
//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] < large && arr[j] > secondLarge){
//             secondLarge = arr[j];
//         }
//     }
//     return secondLarge;
// }

// console.log(secLargeElementInArray(numsArray));