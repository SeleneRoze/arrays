/*
Sum of Resistors in Series
 Calculate the sum of all resistors connected in series.
*/
const res1 = [10, 5, 6, 8];
function sumResistance(arr) {
    const arr2= [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0;
    arr2.forEach((e) => (res = res + e));
    console.log (`${res} ohms`);
}
sumResistance(res1);

/*
Number divided into halves
Given a number, return the number divided into its halves in an array.
*/
function numDiv(number) {
    const half = number / 2;
    return [half, half];
}

console.log(numDiv(4)); // Output: [2, 2]
console.log(numDiv(10)); // Output: [5, 5]
console.log(numDiv(20));// Output: [10,10]
/*Secret Society
 

Find the name of a secret society based on the first letter of each member's name.
 
 */

const member01 = ["Alicia", "Julieta", "Jaime", "Rosalía"]

function secretName(arr) {
    let res=[]
    arr.forEach((e) => console.log (e.charAt(0)))
    return res.sort().join()
}
console.log(secretName(member01));
/*Online status
 

Display online status for a list of users.
 
*/
const users=["Husbanda99", "peach56", "glassedFer"];

function displayUsers(arr){
    const count = users.length;
    let res;
    if (count === 1){
        res = `${arr[0]} is online`;
    } else if (count === 2 ){
        res = `${arr[0]}, ${arr[1]} are online`;
    } else{
        res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res;
}
console.log (displayUsers(users));
/*Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
*/
const arrayOfMultiples = (a , b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++;
    }
    return arr;
  };
  
  console.log(arrayOfMultiples(2, 10));
  console.log(arrayOfMultiples(17, 6));
/*Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
*/
const isPositiveDominant = (arr) => {
    let a = 0;
    let b = 0;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i - 1] > 0 && i > 1 && arr[i - 1] !== arr[i] 
        && arr[i + 1] !== arr[i - 1]) {
          a += 1;
          console.log("a: " + a);
        }
        if (arr[i] < 0 && arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] && arr[i + 1] !== arr[i - 1]) {
          b+= 1;
          console.log("b: " + b);
        }
      }
      if (a > b) {
        return true;
      } else return false;
    };
    console.log(isPositiveDominant([-1, -3, -5, 4, 6767]));
    /*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.

     */

function shorterArray(arr) {

    const midpoint = Math.floor(arr.length / 2);
    const part1 = arr.slice(0, midpoint);
    const part2 = arr.slice(midpoint);

    if (arr.length % 2 !== 0) {
        part2.shift();
    }

 
    const result = part1.map((x, i) => parseFloat(((x + 1 / part2[part2.length - 1 - i]) / 2).toFixed(2)));

    return result;
}


const arr = [1, 2, 3, 5, 22, 6];
const result = shorterArray(arr);
console.log(result); 

