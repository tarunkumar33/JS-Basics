// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeItem);

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
    li.className="list-group-item";
    li.id=emailInput.value;
    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    var btn=document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));

        var obj={
            name:nameInput.value,
            email:emailInput.value
        };
        var x=emailInput.value;
        if(localStorage.getItem(x)){
            var del=document.getElementById(x);
            del.remove();
        }
        localStorage.setItem(emailInput.value,JSON.stringify(obj));

    

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    li.appendChild(btn);
    btn=document.createElement('button');
    btn.className="btn btn-primary btn-sm float-right edit";
    btn.appendChild(document.createTextNode('-'));
    li.appendChild(btn);
    userList.appendChild(li);
    

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}



Object.keys(localStorage).forEach((key) => {



    stringifiedDetailsOfPeople = localStorage.getItem(key);
    
    user = JSON.parse(stringifiedDetailsOfPeople);
    var li = document.createElement('li');
    li.className="list-group-item";
    li.id=user.email;
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
    var btn=document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    btn=document.createElement('button');
    btn.className="btn btn-primary btn-sm float-right edit";
    btn.appendChild(document.createTextNode('-'));
    li.appendChild(btn);
    userList.appendChild(li);
    
    
    
    
    });

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){

        var dele=e.target.parentElement.id;
        localStorage.removeItem(dele);
        e.target.parentElement.remove();

    }
    else if(e.target.classList.contains('edit')){
        var edi=e.target.parentElement.id;
        var userr=JSON.parse(localStorage.getItem(edi));
        nameInput.value=userr.name;
        emailInput.value=userr.email;

    }
}

