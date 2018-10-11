// 1. Create two functions: `double` and `square`.
// `double` should take a number and return the number times two.
// `square` should take a number and return the number squared.
//
// function double (num) {
//   let calcDouble = num * 2
//   return calcDouble
// }
// // console.log(double(2));
//
// function square (num) {
//   let calcSquare = Math.pow(num,2)
//   return calcSquare
// }
// console.log(square(2));

//  * Create a third function `doubleSquare` that uses both of the functions to return a number that is first doubled and then squared.

// // // const doubleSquare = () => {}
//
// function doubleSquare (num) {
//   let doubleNum = double(num)
//   let squareNum = square(doubleNum)
//   return squareNum;
// }
// //BETTER:
// // const doubleSquare = (num) => {
// //   return square(double(num));
// // }
//
// console.log(doubleSquare(4));

// 2. Create a function `classyGreeting` that takes as input the strings `firstName`  and `lastName`,
// and returns a string with a greeting using the two.

// const classyGreeting = (firstName, lastName) => {
//   return "Hello " + firstName + " " + lastName;
// }
// console.log(classyGreeting("Nielene", "Thomas"));

// //OR ---
// const classyGreeting = firstName => lastName => `Good day, ${firstName} ${lastName}`
//
// console.log(classyGreeting("Nielene")("Thomas"));

//   * Create a second function `yell`  that takes string as input and returns the string in all capitalized letters.

// function yell (str) {
//   return str.toUpperCase() + "!"
// }
// console.log(yell("Hello"));

//   * Create a third function  `yellGreeting`  that will take the `firstName`  and `lastName`  as inputs and yell a greeting using the two.

// const yellGreeting = (firstName, lastName) => {
//   return "HELLO, " + firstName.toUpperCase() + " "+ lastName.toUpperCase() + "!"
// }
// console.log(yellGreeting("Nielene", "Thomas"));

// 3. The [concat](https://www.w3schools.com/jsreF/jsref_concat_array.asp) array method is used to merge two (or more) arrays.

// Write a `removeDupes` function that takes an array as an argument and returns a copy without any duplicate elements.

// const removeDupes = (arr) => {
//   let copy = [];
//   let dupes = {};
//
//   for(let i=0; i<arr.length; i++) {
//     if (!dupes[arr[i]]) {
//       //console.log(i,arr[i],dupes);
//       copy.push(arr[i]);
//       dupes[arr[i]]=1;
//     }
//   }
//   //console.log(dupes);
//   return copy
// }
// // console.log(removeDupes([1,2,3,1,1]));

// Then, write a function `concatAndRemoveDupes`  that combines two arrays and removes any duplicates.
//   _Hint:_ Use the array method `includes`, an object, or a Set. Or the spread operator instead of concat.
//

// const concatAndRemoveDupes = (arr1, arr2) => {
//   let arr3 = [...arr1, ...arr2];
//   // console.log(arr3);
//   return removeDupes(arr3)
//   // console.log(removeDupes(arr3));
// }
//   // //return arr1.concat(arr2)
//
//
// console.log(concatAndRemoveDupes([1,2,3], [3,4,5]));






// 4. Given a list of grades, we can get the median grade by sorting the list and taking the middle element, or the average of the two middle elements.
// Create the functions `sort` and `middleElement`, and then use them to create the functions `median`.
//
// let grades = [91, 85, 100, 92, 88];
// console.log(median(grades)); // Should log 91

//--------------

const sort = grades => {
// sorted = grades.sort(function(a,b){return a - b})
    let sorted = grades.sort((a, b) => a - b);

  return sorted;
};
console.log(sort([91, 85, 100, 92, 88]));

//-------------


const middleElement = grades => {
  let middle;

    if (!grades.length % 2) {
      middle = grades[(grades.length - 1) / 2];
          // console.log("odd middle = ", middle);
    } else {
      middle = ( grades[Math.floor((grades.length-1) / 2) ] + grades[ Math.ceil((grades.length-1) / 2) ] ) /2;
          // console.log("even middle = ", middle);
  }
  return middle;
};

// console.log(middleElement([91, 85, 100, 92, 88]));
// console.log(middleElement([1, 2, 3, 4]));
console.log(middleElement([91, 85, 100, 92, 88]));


//--------

const median = grades => {
  return middleElement(sort(grades));
};

console.log(median([91, 85, 100, 92, 88]));
console.log(median([91, 85, 100, 92]));

//-------





// 5. Write a function called `repeat` that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.
//

// let rep;
// const repeat = (str, numberOfTimes = 2) => {
//
//   for (let i=1; i <= numberOfTimes ; i++){
//     console.log(str);
//   }
// }
//
// repeat("mine", 3)




// 6. Using the spread operator, write a function that can take any number of arguments and return the sum of all of them.
//



const sumFunc = (...args) => {
  let sum = 0;

  for (i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(sumFunc(1, 2, 3, 4));





// 7. Write a function called `adder` takes in one number and returns a function that will add that number with another number.
// Using `adder` create an `add5` and an `add9` function. Hint: Closures!

// let num1 = 0;
// let summer
//
// const adder = num2 => {
//   summer = (num1 += num2);
//   return summer;
// };
// console.log(adder(3));
//
//------
//
// num1 = 5;
//
// const add5 = num2 => {
//   adder();
//   return summer;
// };
// console.log(add5(3));

//--------

// num1 = 9
//
// const add9 = (num2) => {
//   return num1 += num2
//
//   }
// console.log(add9(3));



//
//Princess and Carolina - accepeted ot GenOne and in partnership with In Force.
