//Find Single Number From Array
//  None Duplicate number

const SingleNumber=(arr)=>{
    let result = 0;
    for(let index = 0; index < arr.length; index++){
         result = result ^ arr[index];
    }
    return result
}

//  result 0 ^ 1 = 1
// result = 1 ^ 2 = 3
// result = 3 ^ 1 = 2
// First iteration (index 0):

// XOR result with the first element (1).
// result = 0 ^ 1 = 1.
// Second iteration (index 1):

// XOR result with the second element (2).
// result = 1 ^ 2 = 3.
// Third iteration (index 2):

// XOR result with the third element (1).
// result = 3 ^ 1 = 2.
// Fourth iteration (index 3):

// XOR result with the fourth element (4).
// result = 2 ^ 4 = 6.
// Fifth iteration (index 4):

// XOR result with the fifth element (2).
// result = 6 ^ 2 = 4.
// Return the result:

// The final result is 4.
// 
const arr =[1,2,1,4,2]

console.log(SingleNumber(arr))