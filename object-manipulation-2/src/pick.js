/* exported pick */
// create storage for output (empty object)
// create storage for entries(array) for source key values pairs
// look at each item in the entries storage, starting from beginning
//   create storage for key and assign key at entries storage
//   create storage for values and assign values at entries storage
//   look at each item in the keys storage, starting from beginning
//     if the key at entries storage is equal to keys and values at entries storage is not equal to undefined
//       output storage at key is equal to values
//   give back output
// function pick(source, keys) {
//   var output = {};
//   var entries = Object.entries(source);
//   for (var i = 0; i < entries.length; i++) {
//     var key = entries[i][0];
//     var values = entries[i][1];
//     for (var j = 0; j < keys.length; j++) {
//       if (key === keys[j] && values !== undefined) {
//         output[key] = values;
//       }
//     }
//   }
//   return output;
// }

function pick(source, keys) {
  var output = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key.includes(keys[i]) && source[key] !== undefined) {
        output[keys[i]] = source[key];
      }
    }
  }
  return output;
}
