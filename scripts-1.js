// print odd numbers in an array?
var arr=[12,13,14,15,16];
var a=[];
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            a.push(arr[i]);
        }
    }
return a;
    
}
console.log(odd(arr));

//convert all the Strings to title caps in a string array ?

function name(n){
    var str=n.toLowerCase().split(" ");
    for(var i=0;i< str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }

return str.join(' ');
}
name("the king of bruce lee");

//sum of all number in array?

function summ(...res){
    var sum=0;
    for(var i=0;i<res.length;i++){
      sum=sum+res[i];
      }
      return sum;
}
console.log(summ(1,2));

// return all the palindromes in an array?

function getPalindromes(arr) {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      let reversed = word.split("").reverse().join("");
      if (word === reversed) {
        palindromes.push(word);
      }
    }
    return palindromes;
  }
  
  // Example usage:
  let words = ["level", "racecar", "hello", "deified", "civic"];
  let palindromes = getPalindromes(words);
  console.log(palindromes); 

  //Return all the prime numbers in an array://

  (function() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    function isPrime(num) {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    
    const primeNumbers = numbers.filter(function(num) {
      return isPrime(num);
    });
    
    console.log(primeNumbers);
  })();
  
  
//Return median of two sorted arrays of the same size.//

function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = mergedArray.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the length is even, return the average of the two middle elements
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    // If the length is odd, return the middle element
    return mergedArray[mid];
  }
}

// Example usage
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianSortedArrays(arr1, arr2);

console.log(median);

//Remove duplicates from an array

const array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);

//Rotate an array by k times

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = (arr, k) => {
  const n = arr.length;
  const rotations = k % n; // Handle cases where k is larger than the array length
  
  if (rotations === 0) {
    // If k is 0 or a multiple of array length, no rotation is needed
    return arr;
  }
  
  const rotatedPart = arr.slice(n - rotations); // Extract the elements to be rotated
  const remainingPart = arr.slice(0, n - rotations); // Extract the remaining elements
  
  return rotatedPart.concat(remainingPart);
};

const rotatedArray = rotateArray(array, k);

console.log(rotatedArray);


// arrow function
//Print odd numbers in an array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);

//Convert all the strings to title caps in a string array:

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

const strings = ["hello", "WORLD", "JavaScript", "gpt-3.5"];
const titleCaseStrings = convertToTitleCase(strings);

console.log(titleCaseStrings);

//Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

//Return all the prime numbers in an array


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter((num) => isPrime(num));

console.log(primeNumbers);



//Return all the palindromes in an array

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const strings = ["hello", "level", "world", "madam", "javascript"];
const palindromes = strings.filter((str) => isPalindrome(str));

console.log(palindromes);





