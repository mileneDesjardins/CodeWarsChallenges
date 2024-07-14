// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

function getLargerNumbers(a, b) {
  let arrFinal = [];

  for (let i = 0; i < arr1.length; i++) {
    if (a.at(i) > b.at(i)) {
      arrFinal.push(a.at(i));
    } else {
      arrFinal.push(b.at(i));
    }
  }

  return arrFinal;
}

//Best practices
function getLargerNumbers(a, b) {
  var newArray = [];

  for (i = 0; i < a.length; i++) {
    newArray.push(Math.max(a[i], b[i]));
  }

  return newArray;
}
