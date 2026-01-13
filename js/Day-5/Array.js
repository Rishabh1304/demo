// Array  -> Group of same data type
let number = [1,2,3,4,5];
console.log(number[2])

//  Length
console.log(number.length)

// push  -> add a number
number.push(6);
console.log(number);

// pop  -> remove a number
number.pop(5)
console.log(number);

// shift  -> remove a starting number.   This method is used to remove the first element of an array. For example, the following code will remove the first element (1) from the array:
number.shift()
console.log(number)

// unshift  -> add a starting number.   This method is used to add an element to the beginning of an array. For example, the following code will add the element 0 to the beginning of the array:
number.unshift(10)
console.log(number)

// Slice - This method is used to extract a portion of an array. For example, the following code will extract the elements from index 1 to 2 (exclusive):
console.log(number.slice(2,4))

// splice - This method is used to add or remove elements from an array. For example, the following code will remove the element at index 1 and add the elements "Hello World" and [4, 5] at index 1:
number.splice(2,2,8)
console.log(number)