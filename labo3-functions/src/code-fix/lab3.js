// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    let total = 0;
    order.items.forEach((element) => {
      if (element.name !== 'Tax') {
        total = total + (element.price * element.quantity)
      }
    });

    if (total <= 1000) {
      total = total + 40;
    }


    return total;
  },

  addPositive(array) {

    let total = 0;
    array.forEach((element) => { 
      const nbr = parseInt(element);
      if (Math.sign(nbr) !== -1){ //peut aussi if(element > 0)
        total += nbr;
      }
      })
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

    return total;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    let upperString = string.toUpperCase();
    let charIndex = -1;
    for (let i = 0; i < upperString.length - 1; i++){
      const c1 = upperString.charAt(i);
      const c2 = upperString.charAt(i+1);
      if(c1 != ' ' && c1 === c2){
        charIndex = i + 1;
        break;
      };
    }
    
    return charIndex;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's 
  // in this array. If there is any value other than 1 or 0 in the array, 
  // this is an error, return -1. The 1's and 0's may be either string or 
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;


    
    const cb = (e) => {
      if(parseInt(e) !== 1 && parseInt(e) !== 0){
        maxCount = -1;
        currentCount = -1;
        return false;
      }
      if(parseInt(e) === 1){
        currentCount++;
      }else{
        if(currentCount > maxCount){
          maxCount = currentCount;
          
        }
        currentCount = 0;
      }
    }

    array.forEach(cb);

    // Todo
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
