// If Else Ladder 
/*
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // code to be executed if condition1 and condition2 are false and condition3 is true
} ...
else {
  // code to be executed if all conditions are false
}
  */

let x=10
if (x>15){
    console.log("x is greater then 15");
}
else if(x>10){
    console.log("x is greater then 10 but less then or equal to 15");
}
else if(x>5){
    console.log("x is greater then 5 but less then or equal to 10")
}
else {
    console.log("x is less then or equal to 5")
}