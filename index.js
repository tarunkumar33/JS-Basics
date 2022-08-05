let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    let newItem=document.getElementById('item');
    var dec=document.getElementById('item-description');
    let li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem.value));
    let btn=document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    

    var div=document.createElement('div');
    div.appendChild(document.createTextNode(dec.value));
    li.appendChild(div);

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

function filterItems(e){
    // textr->lower
    var text=e.target.value.toLowerCase();
    var li=itemList.getElementsByTagName('li');
    // collection to array
    Array.from(li).forEach((x)=>{
        var itemName=x.firstChild.textContent.toLowerCase();
        var itemDesc=x.children[1].textContent.toLowerCase();
        if(itemName.indexOf(text)!=-1 || itemDesc.indexOf(text)!=-1){
            x.style.display="block";
        }
        else{
            x.style.display="none";
        }
    });

}