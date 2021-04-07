'use strict';

function tuckIn(arr1, arr2){
  let half = Math.floor(arr1.length/2);
  let arr_start = arr1.slice(0,half);
  arr1.splice(0,half);
  arr_start = arr_start.concat(arr2).concat(arr1);
  return arr_start;
}

function minMax(arr){
  let min = arr[0];
  let max = arr[0];
  for(const elem of arr){
    min = min > elem ? elem :min;
    max = max < elem ?elem :max;
  }
  return [min, max]
}

function canNest(arr1, arr2){
  const minMax1 = minMax(arr1);
  const minMax2 = minMax(arr2);
  return minMax1[0] > minMax2[0] && minMax1[1] < minMax2[1];
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]).toString());

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

console.log(canNest([1, 2, 3, 4], [0, 6]) );
console.log(canNest([3, 1], [4, 0]) );
console.log(canNest([9,9,8], [8, 9 ]) );
console.log(canNest([1, 2, 3, 4], [2, 3]) );