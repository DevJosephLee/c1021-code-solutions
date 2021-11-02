/* exported omit */
// create a storage for output (empty object)
// look at each key in source
//  if keys list does not includes key in source
//    output at key is equal to source at key
// give back output

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      output[key] = source[key];
    }
  }
  return output;
}
