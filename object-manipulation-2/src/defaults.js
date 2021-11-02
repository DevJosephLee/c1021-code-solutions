/* exported defaults */
// create storage for a copy of source and assign
// look at each keys in source
//  look at each key in target
//    if keys matches key
//      delete source at keys
//  assign all properties and values from source to target.

function defaults(target, source) {
  var sourceCopy = Object.assign({}, source);
  for (var key in sourceCopy) {
    for (var keys in target) {
      if (key === keys) {
        delete sourceCopy[key];
      }
    }
  }
  Object.assign(target, sourceCopy);
}
