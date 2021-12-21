function graduate(credential) {
  return function(fullName) {
    return `${fullName}, ${credential}`;
  }
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq');

console.log("value of medicalSchool('Joseph Lee'):", medicalSchool('Joseph Lee'));
console.log("value of lawSchool('Joseph Lee'):", lawSchool('Joseph Lee'));
