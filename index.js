const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title",
            default: "My README",
        },
        {
            type: "input",
            name: "description",
            message: "Enter description",
            default: "This is a README",
        },
        {
            type: "input",
            name: "contents",
            message: "Enter table of contents",
            default: "This is my table of contents",
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions",
            default: "This is what you need to install to use",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage instructions",
            default: "This is how you use this app",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Pick the necessary license",
            choices: [],
        },
        {
            type: "input",
            name: "contributing",
            message: "How can users contribute to this current app",
            default: "Here is how you can contribute to this app",
        },
        {
            type: "input",
            name: "tests",
            message: "What tests need to be run for this app",
            default: "These are the tests necessary to run this app",
        }
    ])
    .then()
    .then()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
