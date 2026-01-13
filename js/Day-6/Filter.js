//Filter - The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array. For example, the following code will return an array of all even numbers in the original array:
const arr=[1,2,3,4,5,6]
const res=arr.filter(function (e){
    return e%2==0
})
console.log(arr)
console.log(res)