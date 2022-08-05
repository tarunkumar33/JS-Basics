let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',deleteItem);

function addItem(e){
    e.preventDefault();
    let newItem=document.getElementById('item');
    let li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem.value));
    let btn=document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    btn=document.createElement('button');
    btn.className="btn btn-secondary btn-sm float-right";
    btn.appendChild(document.createTextNode('-'));
    li.appendChild(btn);
    itemList.appendChild(li);
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are u sure?')){
    let removeItem=e.target.parentElement;
    itemList.removeChild(removeItem);
    }
}
}

let items=document.querySelectorAll('.list-group-item');
for(let select of items){
    let btn=document.createElement('button');
    btn.className="btn btn-secondary btn-sm float-right";
    btn.appendChild(document.createTextNode('-'));
    select.appendChild(btn);
}
