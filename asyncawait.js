'use strict';
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const getColdDrinks =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('cold drinks'), 3000);
  });



  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
  console.log(`Husband:we should go in now`);
console.log(`Wife: "I need cold drinks"`);

let coldDrinks=await getColdDrinks;
console.log(`Husband: here is ${coldDrinks}`);
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');




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


// createPost({title:"post 3",body:"this is post 3"}).then(()=>{
//     getPost();
//     deletePost().then(()=>{
//         getPost();
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }).catch((err)=>console.log(err));

async function init(){
    await createPost({title:"post 3",body:"this is post 3"});
    getPost();
    await deletePost();
    getPost();
    console.log(posts);
}
init();