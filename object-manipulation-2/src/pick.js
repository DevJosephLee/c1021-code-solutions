/* exported pick */
// create a storage for output (empty object)
// look at each key in source
//  if keys list includes key in source and source at key is not undefined
//    output at key is equal to source at key
// give back output

function pick(source, keys) {
  var output = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      output[key] = source[key];
    }
  }
  return output;
}
