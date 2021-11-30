/* exported zip */

// make a storage for output (empty array)
// make a storage for temp (empty array)
// make a storage for the shorter length of first and second
// look at each item from the first array, starting from beginning until the shorter length between first and second
//    assign items from first array to temp
//    assign same amount of items as first array to second array to temp
// look at each item from temp array, starting from beginning until end, in chuncks of two
//    assign items from temp, in chuncks of two, to the output array
// give back output

// function zip(first, second) {
//   var output = [];
//   var temp = [];
//   var length = Math.min(first.length, second.length);
//   for (var i = 0; i < length; i++) {
//     temp.push(first[i]);
//     temp.push(second[i]);
//   }
//   for (var j = 0; j < temp.length; j += 2) {
//     output.push(temp.slice(j, j + 2));
//   }
//   return output;
// }

// function zip(first, second) {
//   var output = [];
//   var length = Math.min(first.length, second.length);
//   for (var i = 0; i < length; i += 2) {
//     console.log(first.slice(i, i + 2));
//     console.log(second.slice(i, i + 2));
//   }
// }

// function zip(first, second) {
//   var output = [];
//   var temp = [];
//   var index = 0;
//   var shorterLength = Math.min(first.length, second.length);
//   while (index !== shorterLength) {
//     temp.push(first[index], second[index]);
//     output.push(temp);
//     index++;
//   }
//   console.log(output);
// }
