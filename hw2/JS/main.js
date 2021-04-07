'use strict';

function toArr(object){
  try{
    return Object.entries(object);
  }
  catch(error){
    return new Array;
  }
}

function avgWordLengthCalc(text){
  const newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const words = newText.split(" ");
  let totalWords = 0;
  words.forEach(element => {
    totalWords = totalWords + element.length;
  });
  return totalWords/words.length;
}

function* getMax(values){
  while (values.length > 0){
    let max = values[0];
  values.forEach(element => max = element > max ?element :max);
  values.splice(values.indexOf(max),1);
  yield max;
  }
}

function maxTotal(values){
  let total = 0;
  const maxGen = getMax(values);
  total = total + maxGen.next().value;
  total = total + maxGen.next().value;
  total = total + maxGen.next().value;
  total = total + maxGen.next().value;
  total = total + maxGen.next().value;
  return total;
}

function pentagonalNumber(number){
  return 3*number*(number - 1)/2 + number;
}

console.log(toArr({ key1: 'value1', key2: 'value2' }));
console.log(toArr({}));

console.log(avgWordLengthCalc("q w e r t y."));
console.log(avgWordLengthCalc("The reduce method executes a reducer function."));

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(pentagonalNumber(5));
console.log(pentagonalNumber(9));