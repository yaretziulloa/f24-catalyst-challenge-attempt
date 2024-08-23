// string[]
const todoListAnswer = []; 

/**
 * COMPLETE: 
 * There's a couple stuff you want to work on during your first week at Yale.
 * Write a procedure that adds these todos, represented as strings, to the TodoList
 * Then, print the TodoList in a nice, readable way.
 * 
 * TODOS
 * 1. Apply to y/cs!
 * 2. Pick out my classes
 * 3. Have dinner with my suite
 * 
 */
const addAndPrintTodosAnswer = function() {
    todoListAnswer.push("Apply to y/cs!");
    todoListAnswer.push("Pick out my classes");
    todoListAnswer.push("Have dinner with my suite");
    
    console.log("Todo List:");
    todoListAnswer.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
const mainTask1aAnswer = function() {
    addAndPrintTodosAnswer();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a function called
    // main by convention.
    mainTask1aAnswer();
}
