// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
  let arrFinal = [];

  arrFinal.push(Math.min(...arr));
  arrFinal.push(Math.max(...arr));

  return arrFinal; // fix me!
}

//Best practices
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//Sans le Math. ...
function minMax(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return [minValue, maxValue]; // fix me!
}

//Assignation de la plus grande valeur en JS et la plus petite avec Number. ... On s'assure que ca rentre dans toutes les branches de condition.
function minMax(arr) {
  let minValue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return [minValue, maxValue]; // fix me!
}
