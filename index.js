const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// I'm going to build two different functions, one with the template for building the README and one for writing the file
const buildFile = function (answers) {
    `# <Your-Project-Title>

    ## Description
    
    
    
    ## Table of Contents
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    ## Usage
    
    
    
    ## License
    
    
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    
    ## How to Contribute
    
    
    ## Tests
    
    ## Questions
    
    ![github](https://github.com/${answers.github})

    Feel free to email me with additional questions
    ![email]()`
}
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the project title",
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
            message: "How can users contribute to this current app?",
            default: "Here is how you can contribute to this app",
        },
        {
            type: "input",
            name: "tests",
            message: "What tests need to be run for this app?",
            default: "These are the tests necessary to run this app",
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username",
            default: "Github",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address",
            default: "me@me",
        }
    ])
    .then(buildFile)
    .then(writeToFile);

// TODO: Create a function to write README file
function writeToFile('README1.md', data) {
    console.log('Successfuly written');
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
