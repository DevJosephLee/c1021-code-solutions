/* exported defaults */
// look at each keys in source
//  look at each key in target
//    if keys matches key
//      delete source at keys
//  assign all properties and values from source to target.

function defaults(target, source) {
  for (var keys in source) {
    for (var key in target) {
      if (keys === key) {
        delete source[keys];
      }
    }
  }
  Object.assign(target, source);
}
