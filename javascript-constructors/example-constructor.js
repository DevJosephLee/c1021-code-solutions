function ExampleConstructor() {
  console.log(ExampleConstructor.prototype);
  console.log(typeof ExampleConstructor.prototype);
}

var newVar = new ExampleConstructor();
console.log(newVar);

var instanceofNewVar = newVar instanceof ExampleConstructor;
console.log(instanceofNewVar);
