                                // prime Number

// let isPrime = true;
// function prime(num) {
//   if (num == 1) {
//     console.log(isPrime);
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = false;

//         break;
//       }
//     }
//     console.log(isPrime)
//   }
// }
// prime(51);

                                // Factorial Number

// const sol=function Factorial(n){
//     if(n==0){
//         return 1
//     }
//     else{
//        return n*Factorial(n-1)
//     }
// }
// console.log(sol(5))
                               // Leap year

// let year;
// function Leapyear(year){
//     if(year%4==0)
//         console.log("Leap year")
//     else{
//         console.log("not a leap year")
//     }
// }
// Leapyear(2034)

                                // Day-7

// let cart=[];
// function addtocart(cart){
//     cart.push
//     console.log(cart);
// }
// addtocart(1)

// let cart=[1,2,3,4,5];
// function addcart(){
//     cart.pop();
//     cart.pop();
//     console.log(cart);
// }
// addcart()

// const Marks=[40,30,50,70,89,79,95,99];
// const topper=Marks.filter(function(t){
//     return t>=80;
// })
// console.log(Marks);
// console.log(topper);
// console.log(topper.length);

const Marks=[40,30,50,70,89,79,95,99];
const topper=Marks.filter(function(t){
    return t>=80;
})
function top(topper){
    console.log(topper.length)
}
top(topper)