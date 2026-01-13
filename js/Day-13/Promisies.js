/*let check= new Promise((resolve,reject)=>{
    let number = 41;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
})
.then((message)=>{console.log("message resolve")})
.catch((error)=>{console.log(error)})
.finally(()=>{
    console.log("finally block");
})
    */
const URL="https://fakestoreapi.com/products"
let Product=new Promise( async(resolve,reject)=>{
try{

    const res=  await fetch(URL)
    const data = await res.json()
   resolve(data)




    

   Shivam()
}catch{
    reject("error")
}
}
)
.then((message)=>{console.log(message)})
.catch((error)=>{
    console.log(error)
})