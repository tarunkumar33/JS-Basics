console.log(document);

console.dir(document.firstChild);
console.log(document.getElementById('header-title'));
let h1=document.getElementById('header-title');
console.log(h1.innerText);
console.log(h1.textContent);

h1=document.getElementById('main-header');

h1.style.borderBottom="2px solid black";

h1=document.querySelector('.title');
h1.style.fontWeight="bold";
h1.style.color="green";
console.log(h1);

let select;
// get elements by class name
select=document.getElementsByClassName('list-group-item');
select[2].style.backgroundColor="green";
for(let i=0;i<select.length;i++){
    select[i].style.fontWeight="bold";
}

//Tag name
select=document.getElementsByTagName('li');
select[2].style.backgroundColor="green";
for(let i=0;i<select.length;i++){
    select[i].style.fontWeight="bold";
}
//queryselector
select=document.querySelector('.list-group-item:nth-child(2)');
select.style.backgroundColor="green";

select=document.querySelector('.list-group-item:nth-child(3)');
select.style.display="none";

//queryselectorall
select=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<select.length;i++){
    select[i].style.backgroundColor="green";
}