/* exported truncate */
// give back string, from beginning until string, and append '...'
function truncate(length, string) {
  return string.slice(0, length) + '...';
}
