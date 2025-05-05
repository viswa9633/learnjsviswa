// //Remove the elements
// const fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(1, 2); // Removes 2 elements starting from index 1
// console.log(fruits); // ["apple", "date"]


//add the elements

// const fruits = ["apple", "date"];
// fruits.splice(1, 0, "banana", "cherry"); // Adds elements at index 1
// console.log(fruits); // ["apple", "banana", "cherry", "date"]


//Replace the elements
// const fruits = ["apple", "banana", "cherry"];
// fruits.splice(1, 1, "blueberry"); // Replaces "banana" with "blueberry"
// console.log(fruits); // ["apple", "blueberry", "cherry"]


//Remove all elements from the certian index

const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2); // Removes from index 2 to end
console.log(fruits); // ["apple", "banana"]
