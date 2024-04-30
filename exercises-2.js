/* User profile
*Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userProfile = {
  username: '',
  age: '',
  favoriteMovies: []
};

function askUsername() {
  rl.question('Por favor, introduce un nombre aca chido: ', (answer) => {
    userProfile.username = answer;
    askAge();
  });
}

function askAge() {
  rl.question('Por favor, introduce tu edad: ', (answer) => {
    userProfile.age = answer;
    askFavoriteMovies();
  });
}


function askFavoriteMovies() {
  rl.question('Por favor, introduce tus películas favoritas ,espero esten chidas (separadas por coma): ', (answer) => {
    userProfile.favoriteMovies = answer.split(',').map(movie => movie.trim());
    displayUserProfile();
    rl.close(); 
  });
}

function displayUserProfile() {
  console.log(`Perfil del usuario:
Nombre de usuario: ${userProfile.username}
Edad: ${userProfile.age}
Películas favoritas:`);
  userProfile.favoriteMovies.forEach(movie => {
    console.log(`- La película '${movie}' es la más chida del mundo.`);
  });
}

askUsername();*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const readline = require('readline');

const numbers = [];

function askNumber(index) {
    rl.question(`Ingrese el número ${index + 1}: `, (input) => {
        let number = parseFloat(input);
        
        // Verificar si la entrada es un número válido
        if (isNaN(number) || input.trim() === "") {
            console.log(`Por favor, ingrese un número válido para el número ${index + 1}:`);
            askNumber(index); // Volver a solicitar el número
        } else {
            numbers.push(number);
            if (index < 9) {
                askNumber(index + 1); // Pasar al siguiente número
            } else {
                rl.close();
                calculateHighestNumber();
            }
        }
    });
}

function calculateHighestNumber() {
    let highestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }

    console.log("El número más alto es: " + highestNumber);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askNumber(0);




/////////////////////////////////////////////////////////////////////////////////////////////////////////
const seconds = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));

if (isNaN(seconds) || seconds <= 0) {
    console.log("Por favor, ingrese un número de segundos válido y mayor que cero.");
} else {
   
    setTimeout(function() {
        console.log(`¡Hora de levantarse después de ${seconds} segundos!`);
    }, seconds * 1000); 
}
///////////////////////////////////////////////////////////////////////////////////////////////
function factorial(n) {

  if (n === 0 || n === 1) {
      return 1;
  }

  else {
      return n * factorial(n - 1);
  }
}


const n = parseInt(prompt("Enter an integer number (n >= 1) to calculate its factorial:"));

if (isNaN(n) || n < 1) {
  console.log("Please enter a valid positive integer.");
} else {
  const result = factorial(n);
  console.log(`The factorial of ${n} is: ${result}`);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function flattenArray(arr) {
  let flattenedArray = [];

  function flatten(arr) {
      arr.forEach(element => {
          if (Array.isArray(element)) {
            
              flatten(element);
          } else {

              flattenedArray.push(element);
          }
      });
  }

 
  flatten(arr);

  return flattenedArray;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

const flattenedArray = flattenArray(multiDimension);

console.log("Flattened array:", flattenedArray);


///////////////////////////////////////////////////////////////////////////////////////

function isPalindrome(text) {

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');

  return cleanText === cleanText.split('').reverse().join('');
}

function main() {
  
  const user_input = prompt("por favor introduce una oración:");
  
  if (isPalindrome(user_input)) {
      console.log("sí, es un palindrome!");
  } else {
      console.log("No, no es un  palindrome.");
  }
}

main();
