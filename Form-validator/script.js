const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message 
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//  Check if the email is valid 
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// REFACTORED CODE
//Check required field
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check input length
function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
      }else if (input.value.length > max ){
        showError (input, `${getFieldName(input)} must be less than ${max} characters`);
      }else{
        showSuccess(input);
      }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listners 
form.addEventListener('submit',function(e){
  e.preventDefault();

  checkRequired([username,email,password,password2]);
  checkLength(username, 3, 15);
  checkLength(password,6,25);
});



//  Eventlisteners 
//  form.addEventListener('submit', function (e) {
//    e.preventDefault();
//  }
//   if (username.value === '') {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }  

//   if (email.value === '') {
//     showError(email, "Email is required");

//   } else if (!isValidEmail(email.value)) {
//     showError(email, 'Email is not valid');
//   }else{
//     showSuccess(email);
//   }

// if (password.value === '') {
//   showError(password, "Password is required");
// } else {
//   showSuccess(password);
// };

// if (password2.value === '') {
//   showError(password2, "Username is required");
// } else {
//   showSuccess(password2);
// }

// });