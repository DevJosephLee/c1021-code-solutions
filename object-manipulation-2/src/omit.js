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
//     var key = entries[i][0];
//     var values = entries[i][1];
//     for (var j = 0; j < keys.length; j++) {
//       if (key !== keys[j]) {
//         output[key] = source[values];
//       }
//     }
//   }
//   return output;
// }
