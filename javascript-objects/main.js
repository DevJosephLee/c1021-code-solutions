var student = {
  firstName: 'Joseph',
  lastName: 'Lee',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Professional Sleeper';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'DeLorean',
  model: 'DMC-12',
  year: '1981'
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Louis',
  type: 'Shiba Inu'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
