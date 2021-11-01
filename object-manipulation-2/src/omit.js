/* exported omit */
// function omit(source, keys) {
//   var output = {};
//   var entries = Object.entries(source);
//   var key = [];
//   var values = [];
//   for (var i = 0; i < entries.length; i++) {
//     key = entries[i][0];
//     values = entries[i][1];
//     for (var j = 0; j < keys.length; j++) {
//       if (!keys[j].includes(key)) {
//         console.log(key);
//       }
//     }
//   }
//   return output;
// }

// function omit(source, keys) {
//   var output = {};
//   var entries = Object.entries(source);
//   for (var i = 0; i < entries.length; i++) {
//     for (var j = 0; j < keys.length; j++) {
//       if (entries[i][0] !== keys[j]) {
//         entries.splice(i, entries.length - keys.length);
//         output[entries[i][0]] = entries[i][1];
//         return output;
//       }
//     }
//   }
// }

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      output[key] = source[key];
    }
  }
  return output;
}
// console.log(output);
// return output;
