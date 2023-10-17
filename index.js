const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a,b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const wordLength = word.length;
  const scrolledWords = [];

  for (let i = 0; i < wordLength; i++) {
    const scrolledWord = word.slice(i) + word.slice(0, i);
    scrolledWords.push(scrolledWord);
  }

 const scrolledWord = scrolledWords.shift();
 scrolledWords.push(scrolledWord);

  return scrolledWords;
}




/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */

function betweenExtremes(numbers) {
  if (numbers.length === 0) {
    return 0; // This line will return 0 for an empty array.
  }

  let allNumbers = true; // This line is to check if all elements are numbers

  if (numbers.every((number) => typeof number === "number")) {
    numbers.sort((a, b) => a - b);
    const difference = numbers[numbers.length - 1] - numbers[0];
    return difference;
  } else {
    allNumbers = false;
  }

  // If all elements are not numbers, below will return the original array
  if (!allNumbers) {
    return numbers;
  }
}



/**
 * Returns the translation of English to morse code.
 * @param {String} message - A string to translate. 
 * @param {Object[]} dictionary - A morse code dictionary (one is imported at the top of the file, use it if you want to test your code in this file)
 * @returns {Number} The message in morse code. Note that the tests do not want you to separate words with slashes, like in the example below.
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 * Hint: Check the morse-code-dictionary.json file to see what data is available.
 */
// function morseCodeTranslator(message, dictionary) {
//   let morseMessage = "";

//   for (let i = 0; i < message.length; i++) {
//     let letter = message[i].toUpperCase();
//     if (dictionary[letter]) {
//       morseMessage += dictionary[letter] + " ";
//     } else if (letter === " ") {
//       morseMessage += " ";
//     } else {
//       morseMessage += "? ";
//     }
//   }

//   return morseMessage.trim();
// }

function morseCodeTranslator(message, dictionary) {
  const morseMessage = message
    .toUpperCase() 
    .split('')
    .filter((char) => char !== " ")
    .map((char) => {
       if (dictionary[char]) {
        return dictionary[char];
      } 
    })
    .join(' ');

  return morseMessage;
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
