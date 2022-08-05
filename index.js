// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    var li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    if(localStorage.users){
    localStorage.setItem('users',localStorage.users+'|'+nameInput.value);
    localStorage.setItem('email',localStorage.email+'|'+emailInput.value);
    }
    else{
    localStorage.setItem('users',nameInput.value);
    localStorage.setItem('email',emailInput.value);
    }

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

if(localStorage.users){
    var users=localStorage.users.split('|');
    var emails=localStorage.email.split('|');
    for(let i=0;i<users.length;i++){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`${users[i]}: ${emails[i]}`));
    userList.appendChild(li);
    }

}


