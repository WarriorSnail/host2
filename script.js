const name = document.getElementById('name')//makes name variable
const email = document.getElementById('email')//makes email variable
const date = document.getElementById('date')//makes date variable
const age = document.getElementById('age')//makes age variable
const nage = Number(age)// converts age to number

FormData.addEventListener('submit', e => {//when submit button is clicked, prevents empty fields from submitting and calls validateinputs method
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputcontrol.querySelector('.error');

  errorDisplay.innertext = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const dateValue = date.value.trim();
  const nageValue = nage.valueOf.trim();

  if (nameValue === '') {
    setError(name, 'Name is required');
  } else {
    setSuccess(name);
  }

  if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

if (dateValue === '') {
  setError(date, 'Date is required');
} else {
  setSuccess(date);
}

};
