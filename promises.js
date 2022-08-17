'use strict';

const posts=[
    {title:"post 1", body:"this is post 1",createdAt:new Date().getTime()},
    {title:"post 2", body:"this is post 2",createdAt:new Date().getTime()}
]

let intervalId=0;
function getPost(){
    setTimeout(()=>{
        let output='';
        for(let post of posts){
            output+=`<li>${post.title}- last updated ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
        }
        document.body.innerHTML=output;
    },1000);    
}



function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()
            });
            let err=false;
        if(!err){
            resolve(posts);
        }
        else{
            reject("Something went wrong");
        }
        },2000)
        
    })
    
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length!=0)
            {
            posts.pop();
            resolve();
        }
            else{
                resolve("Array is empty now");
            }
        },1000)
    })
    
    
    
}

// deletePost();
// deletePost();
// deletePost();


createPost({title:"post 3",body:"this is post 3"}).then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost();
    })
    .catch((err)=>{
        console.log(err);
    })
}).catch((err)=>console.log(err));

const promise1=Promise.resolve('hello');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'bye');
});

Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val);
})

let user={
    name:"star",
    lastActivityTime:1
}
let updateLastActivityTime=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime();
            resolve(user.lastActivityTime);
        },1000)
    });

Promise.all([createPost({title:"post 4",body:"this is post 4"}),updateLastActivityTime]).then(([res1,res2])=>{
 console.log(res2);
 deletePost().then(()=>{
    console.log(posts);
})
.catch((err)=>{
    console.log(err);
})
}).catch((err)=>console.log(err))



