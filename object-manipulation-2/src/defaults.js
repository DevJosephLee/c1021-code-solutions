/* exported defaults */
// create storage for a copy of source and assign
// look at each keys in source
//  look at each key in target
//    if keys matches key
//      delete source at keys
//  assign all properties and values from source to target.

function defaults(target, source) {
  var sourceCopy = Object.assign({}, source);
  for (var keys in sourceCopy) {
    for (var key in target) {
      if (keys === key) {
        delete source[keys];
      }
    }
  }
  Object.assign(target, source);
}
