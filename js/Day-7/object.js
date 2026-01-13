const cqs={
    "shivam":subject={"science":43,"maths":55},
    "Rohan":54,
    "Aryan":65,
    "Rishabh":34
};

// console.log(cqs.shivam.science)

                //Add an Object
// cqs.sam=43;
// cqs.Rishi=56;
// console.log(cqs)

                //delete an Object
// delete cqs.Aryan;
// console.log(cqs)

                //Checking if a Property Exists
// console.log("shivam" in cqs);
// console.log("shiva" in cqs);
// for(let Key in cqs){
//     console.log(cqs[Key])
// }

                //Merging
let obj1 = {a:1,b:2,c:3};
let obj2 = {d:4,e:5,f:6};

                //Merging two objects
let obj3 = {...obj1,...obj2};
console.log(obj3)

                //lenght of Object
console.log(Object.keys(obj3).length)