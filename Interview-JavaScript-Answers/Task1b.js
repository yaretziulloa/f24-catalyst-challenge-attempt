// How do I run this? 
// node Task1b.js   

todoListAnswer = []; 
/**
 * COMPLETE: 
 * We do a lot in the addAndPrintTodos() funciton. Is there a way
 * to seperate the concerns so that they could be tied to particular events?
 *
 * Replace the __ in each of the todos and copy the logic you defined
 * into each of them
 */

function addTodo(todoString) {
    todoListAnswer.push(todoString);
}

function printTodos() {
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
function mainTask1b() {
    addTodo("Apply to y/cs!")
    printTodos()
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}