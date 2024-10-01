// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;

    const squared = (x) => x * x;

    return numbers.map(squared);
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    const checka = (x) => x.includes('a');
    let result = strings.filter(checka);

    return result;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    let result = 0;
    function add(number){
      result = result + number
    }
    numbers.forEach(add);
    return result;
    // return number.reduce((prev, curr) => prev + curr, 0)
  },

  // removes last element of an array and returns it
  helper1(array) {
    return array.pop();
  },

  // add one element to an array
  helper2(arr, newOne) {
    const tab = arr.push(newOne);
    return arr;
  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    let tab = arr.shift();
    return tab;
  },

  // add elements to the top of an array
  helper4(arr, ...elements) {
    const tab = arr.unshift(...elements)
    return arr;
  },


  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    let deleted = [];
    if(deleteCount != 0){
      deleted.push(arr[start]);
    }
    
    arr.splice(start, deleteCount, ...items);
    return deleted;
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    let newArr = array.slice(start, end);
    return newArr;
  },

  // concat two arrays
  helper7(arr1, arr2) {
    let newArr = [];
    newArr.push(...arr1, ...arr2);
    return newArr;
  },

  // see unit tests for helper8 function
  helper8(arr, element) {
    let index =  arr.indexOf(element);
    return index;
  },

  // see unit tests for helper9 function
  helper9(array, value) {
    let bool = false;
    array.forEach((element) => {if (element === value){bool = true} })
    return bool;
  },

  // see unit tests for helper10 function
  helper10(array, callback) {
    return callback();
  },

  // see unit tests for helper11 function
  helper11(arr, predicate) {
    return predicate;
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return arr.every(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return arr.some(funcCallback);
  },

// see unit tests for helper14 function
  helper14(arr, separator) {
    let chaine = arr.join(separator);
    return chaine;
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    return 0;
  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    // sum
    return 0;
  },
};

module.exports = functions;
