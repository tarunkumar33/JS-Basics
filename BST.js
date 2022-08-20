'use strict';
class treeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function insert(root, val) {
    if (!root)
        return new treeNode(val);
    if (val < root.val) {
        root.left = insert(root.left, val);
    }
    else {
        root.right = insert(root.right, val);
    }
    return root;
}

function search(root, val) {
    if (!root)
        return null;
    if (root.val === val)
        return root;
    else if (val < root.val)
        return search(root.left, val);
    return search(root.right, val);
}

function preorder(root) {
    if (!root)
        return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

function preorderInterative(root) {
    let st = [];
    let temp = root;
    while (temp || st.length != 0) {
        if (!temp){
            temp = st.pop();
            temp=temp.right;
        }

        else {
            console.log(temp.val);
            st.push(temp);
            temp = temp.left;
        }
    }
}

let a = [10, 6, 8, 4, 18, 14, 20];
let root = null;
for (let i of a) {
    root = insert(root, i);
}
console.log(root);

console.log(search(root, 188));

preorder(root);
console.log("Iterative");
preorderInterative(root);