// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw

      

      if(typeof a === "number" && typeof b === "number"){
        return(a + b);
      }else{
        throw new Error('Error');
      }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = (x) => x * 2;

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];


    const verifyBadword = function(badword){
      if(input.includes(badword)){
        throw new Error('Error');
      }
    }

    grosMot.forEach(verifyBadword);

  },

  nameOfWeekDay(index) {
    const jours = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let jourNumero = jours[index];
    return jourNumero;
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    let sortedList = array.sort((a, b) => a - b);
    return sortedList;
  },

  createCounterFunction(input) {
    let compte = input;
    const incremente = () => {
      compte ++;
      return compte;
    }

    return incremente;
    
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    let message = (`Hello ${name}. Are you well?`);
    return message;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    callback(1, 2);
  },

  combineArrays(array1, array2) {
    let array3 = [...array1,...array2];
    return array3;
  },

  promiseMeMoney(resolve) {
    return new Promise((resolve /**/) => {setTimeout(() => {
      resolve("send message");
    }, 2000);
  });
}
};

module.exports = functions;
