# F2024 Catalyst Learning Take-Home Challenge - From Procedural to Event Driven Programming Using JavaScript

Catalyst is all about learning, so this is designed to assess how well you learn/are willing to learn programming principles! You will be tasked with exploring a new computing technology by creating a small product based on it.

This project (as well as Catalyst in general) is designed for people with programming skills equivilant to a 4 or 5 on AP CSA in an object oriented language or completion of Introduction to Computer Science at the collegiate level. If you've never programmed before, you may find this task difficult.

After completing this project, please submit it and attend your discussion interview slot where we will walk through your solution and ask you questions about the JS you implemented. If you recevied a learning interview, you WILL receive a guaranteed discussion slot.

Please work individually!

## Using the Terminal

If you have never used the Terminal, here's a quick primer as you will need to use it to set up the project and check you work.

The terminal lets you use UNIX commands to navigate the filesystem of your computer. This is the same filesystem you use in the Apple Finder, for instance.

The cd command lets you enter a folder in the filsystem. So if I'm in the home directory and want to go into the downloads folder, I would do `cd downloads` in the home directory. `cd ..` lets you go back to the folder you just came from.

For this project, you need only go from directory to directory. We give you the commands. you need to run in a particular directory in the code file of the task.

## Prerequesties + Setup

Install Node.js: https://nodejs.org/en/download/package-manager

You need some sort of code editor. VSCode is likely the easiest: https://code.visualstudio.com/download

Download the folder onto your machine. Open the folder using VSCode. Open your terminal by clicking the terminal button on the top of VSCode and clicking New Terminal.

**Verify with NodeJS and NPM are installed by running:** \
`node -v` \
`npm -v` \
Run `npm i --save-dev @types/node` in the terminal

Note: We will have office hours to come get help setting up your machine and feel free to ask others for help setting up this part.

The rest of the files will have instructions on how to run them.

## Introduction & Resources

In this task, you will be tasked with learning the basics of JavaScript and Event Driven Programming in creating a simple Todo List App. By the end, you will have a basic understanding of how to create an interactive website using HTML and JavaScript!

Google is your friend! You are not expected to be familar with web development/software engineering principles. If you don't know how to do something (i.e. add an string to a list), Google it! Explore StackOverflow and relevant documentation. Please do not ChatGPT the entire project. It will show during the interview and Catalyst will not be a fun/meaningful experience for you if you need to lean on ChatGPT heavily to generate code. Feel free to ask it conceptual questions, but stay away from the copy-code button.

Further instructions on what you are expected to complete are in the code file of the particular task itself.

## Task I - What is Event Driven Programming?

It's likely that the programming you're used to doing is **Procedural**. You tell the computer step by step what to do to accomplish a task (i.e. when the program starts, call the main() method and start executing code to start listing random numbers for 1 to 10)

In **Event Driven Programmming (EDP)**, the paradigm flips. We tell the computer what to do _in the event_ something happens, whether that be a user typing into an input or clicking a button. In this task, we will explore EDP by writing some basic procedures, then work on _seperating the concerns_ so that they could be tied to particular events.

**JavaScript** is a language used to specify the behavior of webpages (behavior = do this, when that) and forms the backbone of y/cs applications. We will work with it throughout the project.

### Part A

Get familar with the basics of JavaScript syntax to write a procedure that adds certain specified todos to a list and then prints them out!

### Part B

Seperate the concerns (SoC) of this procedure into individual functions that handle specific portions. This SoC will prime tying specific parts of the program to events firing. Make the buisness logic of our application more flexible!

## Task II - Deleting!

Delete an element from our todoList by index.

## Task III - HTML Scripting

HTML (HyperText Markup Language) is the standard markup language used for creating and designing webpages. It is not a programming language but rather a scripting language that structures content on the web. HTML defines the structure of web pages by using a series of elements and tags that tell the browser how to display content like text, images, videos, and links.

The point of this task is not to understand HTML, but you should study the code and try to identfiy the points that are likely responsible for key actions of the Todo App. Where is the button being created to add the todos? What about the one to delete?

Take the logic we've defiend in the last two tasks and tie them to the parts of the code that make the most sense. By the end, you should have a simple webpage that lets you add todos!
