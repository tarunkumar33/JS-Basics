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