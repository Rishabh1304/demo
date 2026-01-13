const URL="https://fakestoreapi.com/products"
const Shivam= async()=>{
    try{
        const res= await fetch(URL)
        const data= await res.json()
        console.log(data)
    }
    catch{
        console.log(Error);
    }
}
Shivam()