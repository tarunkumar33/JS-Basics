'use strict';
class treeNode{
    constructor(val,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;
    }
}
function insert(root,val){
    if(!root)
    return new treeNode(val);
    if(val<root.val){
        root.left=insert(root.left,val);
    }
    else{
        root.right=insert(root.right,val);
    }
    return root;
}

function search(root,val){
    if(!root)
    return null;
    if(root.val===val)
    return root;
    else if(val<root.val)
    return search(root.left,val);
    return search(root.right,val);
}

let a=[10,6,8,4,18,14,20];
let root=null;
for(let i of a){
    root=insert(root,i);
}
console.log(root);

console.log(search(root,188));