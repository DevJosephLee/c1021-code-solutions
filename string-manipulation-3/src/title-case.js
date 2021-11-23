/* exported titleCase */

// make a storage for output (empty string)
// make title to array form, splitting them for spaces in between words
// look at each item of the title in array form, beginning until the end
// if any of the items lowercased is 'api'
// replace that item with 'API'
// also, if any of the items lowercased is 'javascript'
// replace that item with 'JavaScript'
// also, if the length of an item is greater than 3
// replace that item with the first letter capitalized, rest is lowercased
// also, if the any of the item's next item is 'developers'
// replace that item with the first letter capitalized, rest is lowercased
// make a storage for modded title, and assign that value and convert it back to string form
// look at each item of the modded title, beginning until the end
// if any of the item is equal to ':'
// replace the second item right of ':' and uppercase
// also, if any of the item is equal to '-'
// replace the item right of '-' and uppercase
// uppercase the first letter of the modded title, and assign it to output storage
// give back output

// function titleCase(title) {
//   var output = '';
//   var titleSplit = title.split(' ');
//   for (var i = 0; i < titleSplit.length; i++) {
//     if (titleSplit[i].toLowerCase() === 'api') {
//       titleSplit.splice(i, 1, 'API');
//     } else if (titleSplit[i].toLowerCase() === 'javascript') {
//       titleSplit.splice(i, 1, 'JavaScript');
//     } else if (titleSplit[i].toLowerCase() === 'javascript:') {
//       titleSplit.splice(i, 1, 'JavaScript:');
//     } else if (titleSplit[i].length > 3) {
//       titleSplit.splice(i, 1, titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1).toLowerCase());
//     } else if (titleSplit[i + 1].toLowerCase() === 'developers') {
//       titleSplit.splice(i, 1, titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1).toLowerCase());
//     }
//   }
//   var modTitle = titleSplit.join(' ');
//   for (var j = 0; j < modTitle.length; j++) {
//     if (modTitle[j] === ':') {
//       modTitle = modTitle.slice(0, j + 1) + ' ' + modTitle[j + 2].toUpperCase() + modTitle.slice(j + 3, modTitle.length);
//     } else if (modTitle[j] === '-') {
//       modTitle = modTitle.slice(0, j + 1) + modTitle[j + 1].toUpperCase() + modTitle.slice(j + 2, modTitle.length);
//     }
//   }
//   output = modTitle[0].toUpperCase() + modTitle.slice(1);
//   return output;
// }

function titleCase(title) {
  // var ouput = '';
  var titleSplit = title.split(' ');
  for (var i = 0; i < titleSplit.length; i++) {
    if (titleSplit[i].toLowerCase() === 'api') {
      titleSplit.splice(i, 1, 'API');
    } else if (titleSplit[i].toLowerCase() === 'javascript') {
      titleSplit.splice(i, 1, 'JavaScript');
    } else if (titleSplit[i].toLowerCase() === 'javascript:') {
      titleSplit.splice(i, 1, 'JavaScript:');
    } else if (titleSplit[i].includes(lowerCaseWords)) {
      titleSplit.splice(i, 1, titleSplit[i].toLowerCase());
    }
  }
  // console.log(titleSplit);
  // var modTitle = titleSplit.join(' ');
}

var lowerCaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
