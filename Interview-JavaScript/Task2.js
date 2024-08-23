// How do I run this? 
// node Task2.ts    

todoList = [
    "Apply to y/cs!",
    "Pick out my classes",
    "Have dinner with my suite"
];
 
/**
 * COMPLETE
 * Write a function that takes in an index of the todo 
 * and deletes the corresponding one
 * Ex: 
 * Todo = "Apply to y/cs!", and after deleteTodo(0) has been ran
 * const todos should look like this:
 * 
 * const todos = [
    "Pick out my classes",
    "Have dinner with my suite"
];
 */
function deleteTodo(index) {
    console.log("Before: " + todoList)
    // YOUR CODE HERE
    console.log("After:" + todoList)
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask2() {
    deleteTodo(0);
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask2();
}
