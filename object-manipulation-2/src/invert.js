/* exported invert */
// create storage for output (empty object)
// create storage for entries, and assign entries for source (array)
// look at each item in entries, starting from beginning
//   create storage for keys, and assign the first indexes of the entries
//   create storage for values, and assign the second indexes of the entries
//   output at values is equal to keys
// give back output stroage

function invert(source) {
  var output = {};
  var entries = Object.entries(source);
  for (var i = 0; i < entries.length; i++) {
    var keys = entries[i][0];
    var values = entries[i][1];
    output[values] = keys;
  }
  return output;
}
