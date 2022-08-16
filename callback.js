'use strict';
const posts=[
    {title:"post 1", body:"this is post 1",createdAt:new Date().getTime()},
    {title:"post 2", body:"this is post 2",createdAt:new Date().getTime()}
]

let intervalId=0;
function getPost(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        for(let post of posts){
            output+=`<li>${post.title}- last updated ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
        }
        document.body.innerHTML=output;
    },1000);
}



function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000)
}
function create4Post(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },6000)
}

createPost({title:"post 3",body:"this is post 3"},getPost);
create4Post({title:"post 4",body:"this is post 4"},getPost);


