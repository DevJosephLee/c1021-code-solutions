/* exported invert */
function invert(source) {
  var output = {};
  var keys = Object.keys(source);
  var values = Object.values(source);
  // console.log('keys:', keys);
  // console.log('values:', values);
  // output[values] = keys;
  // console.log(output);
  // output[keys] = values;
  // console.log(output);
  for (var i = 0; i < keys.length; i++) {
    output[values] = keys[i];
  }

}
