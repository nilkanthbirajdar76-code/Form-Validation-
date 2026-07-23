 let data = new Promise((reslove,reject)=>{

    let sucess = true;

    if(sucess){
        reslove("Data loaded");
    }
    else{
        reject("Data not loaded")
    }
})

// data
 .then((result)=>{
     console.log(result);
 })
  .catch((error)=>{
      console.log(error);    
  })
 .finally(()=>{
 console.log("Done");
 })
promise.all
let Promise1=Promise.resolve("Promise 1 resloved");
let Promise2=Promise.resolve("Promise 2 resloved");
let Promise3=Promise.resolve("Promise  3 resloved");

Promise.allSettled([promise1,promise2,promise3])
.then((result)=>{
    console.log(result);
   let dd= result.filter((e)=> e.status ==="fulfilled").map((e) => ({ status : e.value , value : e.value}) )
    console.log(dd);
    
})
 
