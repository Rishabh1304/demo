console.log("hello time")
setTimeout(()=>{
    console.log("Hi Rishabh")
},2000)
console.log("After error")
let Rishabh = setInterval(()=>{
    console.log("Hi interval")
},3000)
clearInterval(Rishabh)