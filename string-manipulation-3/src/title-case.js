/* exported titleCase */
function titleCase(title) {
  var upperCaseWordsInArray = [];
  var titleSplit = title.split(' ');
  for (var i = 0; i < titleSplit.length; i++) {
    if (titleSplit[i].toLowerCase() === 'javascript') {
      titleSplit[i] = 'JavaScript';
    } else if (titleSplit[i].toLowerCase() === 'api') {
      titleSplit[i] = 'API';
    } else if (titleSplit[i].length < 4) {
      upperCaseWordsInArray.push(titleSplit[i]);
    } else {
      upperCaseWordsInArray.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1).toLowerCase());
    }
  }
  // return upperCaseWordsInArray.join(' ');
}

// console.log(title[0].toUpperCase());
// var output = '';
// var currentWord = '';
// for (var i = 0; i < title.length; i++) {
// if (title[i] !== ' ') {
//   currentWord = title[0].toUpperCase() + title.slice(1).toLowerCase();
//   console.log(currentWord);
// }
// }
// output += currentWord;
// return output;
// else {
//   output += currentWord + ' ';
//   currentWord = '';
// }

// var output = '';
// var currentWord = '';
// for (var i = 0; i < title.length; i++) {
//   if (title[i] !== ' ') {
//     currentWord += title[0].toUpperCase() + currentWord;
//   } else {
//     output = currentWord + ' ';
//     currentWord = '';
//   }
// }
// output += currentWord;
// return output;
// var output = [];
// var titleInArray = title.split(' ');
// for (var i = 0; i < titleInArray.length; i++) {
//   console.log(titleInArray[i]);
// for (var i = 0; i < title.length; i++) {
//   if (title[i].toLowerCase() === 'javascript') {
//     currentWord += 'JavaScript';
//   } else if (title[i].toLowerCase() === 'api') {
//     currentWord += 'API';
//   } else if (title[i] !== ' ') {
//     currentWord += title.slice(0, 1).toUpperCase() + title.slice(1, i);
//   } else {
//     output += currentWord + ' ';
//     currentWord = '';
//   }
// }
// output += currentWord;
// return output;

// var output = '';
// var currentWord = '';
// for (var i = 0; i < title.length; i++) {
//   if (title[i] !== ' ') {
//     currentWord = title[0].toUpperCase() + title.slice(1).toLowerCase();
//     console.log(currentWord);
//   }
// }

// console.log(upperCaseWordsInArray);
// var output = upperCaseWordsInArray.join(' ');
// return output;
// console.log(upperCaseWordsInArray.length);
// for (var j = 0; j < upperCaseWordsInArray.length; j++) {
//   if (upperCaseWordsInArray[j].length < 4) {
//     upperCaseWordsInArray[j].toLowerCase();
//   }
// }
// console.log(upperCaseWordsInArray);
// var output = upperCaseWordsInArray.join(' ');
// for (var j = 0; j < output.length; j++) {
//   if ()
// }
