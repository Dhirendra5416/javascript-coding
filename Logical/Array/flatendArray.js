const arr2 = [0, 1, [2, [3, [4, 5, [6, 7]]]]];

function flattenArray(arr) {
  const flatArray = [];

  function recursiveFlatten(currentArray) {
    for (let i = 0; i < currentArray.length; i++) {
      if (Array.isArray(currentArray[i])) {
        recursiveFlatten(currentArray[i]);
      } else {
        flatArray.push(currentArray[i]);
      }
    }
  }

  recursiveFlatten(arr);
  return flatArray;
}

const flattenedArray = flattenArray(arr2);
console.log(flattenedArray);



// Using Array method

const flattenedArray1 = arr2.flat(Infinity);

// You can flatten a nested array using the flat method in JavaScript. 
// The flat method is used to flatten nested arrays by a specified depth.
//  In your case, since the nesting is multiple levels deep,
//  you can use Infinity to flatten the array entirely.
//  ECMAScript 2019 (ES10) and later versions.
//Finally, the flat(1) method is used to flatten the array by one level.

console.log(flattenedArray1)



// function flattenArray1(arr) {
//   return Array.from(arr, (element) => (Array.isArray(element) ? flattenArray1(element) : element)).flat(1);
// }

// const flattenedArray2 = flattenArray1(arr2);
// console.log(flattenedArray2);
