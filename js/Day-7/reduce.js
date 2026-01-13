//Reduce - The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator. For example, the following code will return the sum of all elements in the array:
let myarray = [1,2,3,4,5];
let sum = myarray.reduce((accumulator,current)=> accumulator+current)
console.log(sum)