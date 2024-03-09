/////////////////////////// TASK 1 ///////////////////////////

function getReverse(num, reversed = 0) {
  debugger
  if (num < 1) {
    return reversed;
  }
  const lastDigit = num % 10;
  const remain = Math.floor(num / 10);
  return getReverse(remain, reversed * 10 + lastDigit);
}

getReverse(123);
getReverse(815796);

/////////////////////////// TASK 2 ///////////////////////////

function findSecondOccurence(num, arr, index = 0, count = 0) {
  if(arr[index] === num) {
    count++;
    if(count === 2) {
      return index;
    }
  }
  return findSecondOccurence(num, arr, index + 1, count);
}
findSecondOccurence(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]);
findSecondOccurence(8, [8, 8, 4, 0, 8, 0, 0, 0, 4]);

/////////////////////////// TASK 3 ///////////////////////////

function countOccurence (substring, string, index = 0, count = 0) {
  if (index >= string.length) {
    return count;
  }
  if(string.indexOf(substring, index) !== -1) {
    count++;
    index = string.indexOf(substring, index) + 1;
  }
  return countOccurence(substring, string, index + 1, count);
}
countOccurence('ar', 'Are var far shared?');
countOccurence('ook', 'Facebook looks odd');

/////////////////////////// TASK 4 ///////////////////////////

function replacePi(str) {
  if (str.length < 2) {
    return str;
  }
  if(str.slice(0,2).toLowerCase() === "pi") {
    return "3.14" + replacePi(str.slice(2));
  } else {
    return str[0] + replacePi(str.slice(1));
  }
}
replacePi("picsart pictures PIcsart, pixar");

/////////////////////////// TASK 5 ///////////////////////////

function flattenArr(arr) {
  debugger
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flattenArr(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result;
}
flattenArr([123,12, [123, [123, [234, [322, [123, [123]]]]]]]);

/////////////////////////// TASK 6 ///////////////////////////

function calculateDigits(num) {
  if(num <= 9) {
    return num;
  } else {
    let calculated = calculateDigits(Math.floor(num / 10)) + num % 10;
    if(calculated <= 9) {
      return calculated;
    } else {
      return calculateDigits(calculated);
    }
  }
}
calculateDigits(92);
