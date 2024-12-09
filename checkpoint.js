//STRING MANIPULATION FUNCTIONS//

//Reverse a String//
function reverseString (str){
    return str.split("").reverse().join('');
};
console.log(reverseString("WELCOME"))



//Count Characters//
function countCharacters(str){
    return str.length;
};
console.log(countCharacters("WELCOME"))

//Capitalize Words//
function capitalizeWords(str){
    return str.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("")
};
console.log(capitalizeWords("welcome to my world"));

//ARRAY FUNCTIONS//

//Maximum and Minimum of an array//
function minMax(arr){
    if(arr.length === 0){
        return undefined;
    };
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return{max,min};
};
console.log(minMax([2,4,10,12,1]));


//Sum of array//
function sumArray(arr){
    return arr.reduce((sum, current)=> sum + current, 0);
};
console.log(sumArray([2,4,5,6,7]));

//Filter Array//
function filterArray(arr){
    return arr.filter(num => num % 2 === 0);
};
console.log(filterArray([2,4,5,6,7,8]));

//Mathematical Functions//

//Factorial Function//
function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(7));

  // Prime Number Check//
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(17));

  //Fibonacci Sequence//
  function fibonacci(n) {
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
    return sequence;
  }
  console.log(fibonacci(10));
