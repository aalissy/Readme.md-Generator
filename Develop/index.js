// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "What is your project title?",
}, {
    type: "input",
    name: "describe",
    message: "Input a brief description of your project.",
}, {
    type: "input",
    name: "install",
    message: "How should I install this?",
}, {
    type: "input",
    name: "use",
    message: "How are you using this?",
}, {
    type: "input",
    name: "contribution",
    message: "How will others contribute to this?"
}, {
    type: "input",
    name: "testing",
    message: "How will you test this?",
}, {
    type: "list",
    name: "license",
    message: "Which license are you choosing?",
    choices: ["MIT", "Apache", "GPL 3", "BSD 3", "No License"]
}, {
    type: "input",
    name: "user",
    message: "What is your github username?"
}, {
    type: "input",
    name: "email",
    message: "What is your email?",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("README.md created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
