// console.log(document);

// console.dir(document.firstChild);
// console.log(document.getElementById('header-title'));
// let h1=document.getElementById('header-title');
// console.log(h1.innerText);
// console.log(h1.textContent);

// h1=document.getElementById('main-header');

// h1.style.borderBottom="2px solid black";

// h1=document.querySelector('.title');
// h1.style.fontWeight="bold";
// h1.style.color="green";
// console.log(h1);

// let select;
// // get elements by class name
// select=document.getElementsByClassName('list-group-item');
// select[2].style.backgroundColor="green";
// for(let i=0;i<select.length;i++){
//     select[i].style.fontWeight="bold";
// }

// //Tag name
// select=document.getElementsByTagName('li');
// select[2].style.backgroundColor="green";
// for(let i=0;i<select.length;i++){
//     select[i].style.fontWeight="bold";
// }
// //queryselector
// select=document.querySelector('.list-group-item:nth-child(2)');
// select.style.backgroundColor="green";

// select=document.querySelector('.list-group-item:nth-child(3)');
// select.style.display="none";

// //queryselectorall
// select=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0;i<select.length;i++){
//     select[i].style.backgroundColor="green";
// }
//Traversing the DOM
select=document.querySelector('#items');
console.log(select.parentNode);
console.log(select.parentElement);
console.log(select.children);
console.log(select.firstElementChild);
console.log(select.lastElementChild);
console.log(select.nextElementSibling);
console.log(select.previousElementSibling);
console.log(select.childNodes);
console.log(select.firstChild);
console.log(select.lastChild);
console.log(select.nextSibling);
console.log(select.previousSibling);

let h1=document.createElement('h1');
h1.className="hello"
h1.setAttribute('title','hello');
h1.appendChild(document.createTextNode('HEllo'));
console.log(h1);

let container=document.querySelector('header .container');
let header=document.querySelector('header h1');

container.insertBefore(h1,header);
container=document.querySelector('#items');
header=document.querySelector('.list-group-item');

h1=document.createElement('h1');
h1.className="hello"
h1.setAttribute('title','hello');
h1.appendChild(document.createTextNode('HEllo'));
container.insertBefore(h1,header);






