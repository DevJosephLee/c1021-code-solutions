/* exported defaults */
// function defaults(target, source) {
// Object.assign(target, source);
// var entriesTarget = Object.entries(target);
// var entriesSource = Object.entries(source);
// console.log('target:', entriesTarget);
// console.log('source:', entriesSource);
// for (var i = 0; i < entriesTarget.length; i++) {
//   for (var j = 0; j < entriesSource.length; j++) {
//     if (entriesTarget[i][0] !== entriesSource[j][0]) {
//       entriesTarget.push(entriesSource[j]);
//     }
//   }
// }

// }

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  // for (var i = 0; i < targetKeys.length; i++) {
  //   if (targetKeys[i].includes(sourceKeys)) {
  //     target[targetKeys[i]] = source[sourceKeys];
  //   }
  // }
  // if (!targetKeys.includes(sourceKeys)) {
  //   target[sourceKeys] = source[sourceKeys];
  // } else {
  //   target = source;
  // }
  if (targetKeys.length === 0) {
    target = source[sourceKeys];
  }
}

// else if (Object.entries(target).length)
// else if (Object.entries(target).length === 0) {
// console.log(Object.entries(target).length);
// console.log(Object.entries(target).length === 0);

// function defaults(target, source) {
//   var targetEntries = Object.entries(target);
//   var sourceEntries = Object.entries(source);
//   // console.log('targetEntries:', targetEntries);
//   // console.log('sourceEntries:', sourceEntries);
//   for (var i = 0; i < targetEntries.length; i++) {
//     for (var j = 0; j < sourceEntries.length; j++) {
//       if (targetEntries[i][0] !== sourceEntries[j][0]) {
//         console.log(targetEntries[i]);
//       }
//     }
//   }
// }

// for (var key in target) {
//   for (var keys in source) {
//     if (key !== keys) {
//       target[keys] = source[keys];
// console.log('key:', key);
// console.log('keys:', keys);
//     }
//   }
// }
