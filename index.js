const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// I'm going to build two different functions, one with the template for building the README and one for writing the file
const buildFile = function (answers) {
    return `# <${answers.title}>

![badge](https://img.shields.io/badge/${answers.license}-license-gold)

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This application is covered under the ${answers.license} license



## How to Contribute

${answers.contributes}

## Tests

${answers.tests}

## Questions

[github](https://github.com/${answers.github})

Feel free to email me with additional questions @
[email](${answers.email})`;

};

const writeToFile = function (html) {
    if (!fs.existsSync('./output')) fs.mkdirSync('./output');
    fs.writeFileSync('output/README.md', html);
    console.log('Successfully written');
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
            choices: ["MIT", "BSD", "CC", "APACHE"],
        },
        {
            type: "input",
            name: "contributes",
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

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
