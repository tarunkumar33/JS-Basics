// USER FORM SCRIPT

//Axios instance
axiosobj=axios.create({
    baseURL:'https://crudcrud.com/api/7b69a83dbd67491abe6d2c2475eb11f4'
});

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeItem);

window.addEventListener('DOMContentLoaded',loadData);
//
let uniqueId='';

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } 
  else if(uniqueId!=''){
    var obj={
        name:nameInput.value,
        email:emailInput.value
    };
    
    axiosobj.put(`/appointmentData/${uniqueId}`,obj)
    .then(res=>{
        document.getElementById(uniqueId).remove();
        showScreen({_id:uniqueId,...obj});
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
        uniqueId='';

    })
    .catch(err=>console.log(err));

    

  }
  else {

        var obj={
            name:nameInput.value,
            email:emailInput.value
        };

        axiosobj.post("/appointmentData",obj)
        .then((res)=>showScreen(res.data))
        .catch(err=>console.log(err));
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    uniqueId='';
  }
}
function showScreen(user){
    var li = document.createElement('li');
    li.className="list-group-item";
    li.id=user._id;
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
}

function loadData(){
axiosobj.get("/appointmentData")
.then((res)=>{
    for(let i of res.data){
        showScreen(i);
    }
})
.catch(err=>console.log(err));
}

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        var dele=e.target.parentElement.id;
        axiosobj.delete(`/appointmentData/${dele}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        e.target.parentElement.remove();

    }
    else if(e.target.classList.contains('edit')){
        var edi=e.target.parentElement.id;
        uniqueId=edi;
        axiosobj.get(`/appointmentData/${uniqueId}`)
        .then((res)=>{
            nameInput.value=res.data.name;
            emailInput.value=res.data.email;
        })
        .catch(err=>{
            uniqueId='';
            console.log(err);
        });
        

    }
}
