var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function userInput() {
  event.preventDefault();
  var userInput = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('formValues:', userInput);
  $contactForm.reset();
});
