// TODO: Include packages needed for this application
// Defines a constant inquirer that requires inquirer
const inquirer = require("inquirer");
// Defines a constant fs that requires fs or file system
const fs = require("fs");
// Defines a constant generateMarkdown that requires the generateMarkdown.js file that we created
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// Questions array that prompt the users with questions about their Readme.md file
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
// Defines a function writeToFile with fileName and data as parameters
function writeToFile(fileName, data) {
    // Uses fs to write the file
    // If there's an error it throws an error otherwise it logs README.md created!
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("README.md created!")
    );
}

// TODO: Create a function to initialize app
// Defines a function init()
function init() {
    // Uses inquirer to prompt the questions defined above
    inquirer.prompt(questions)
    // Then with the data being the user input it writes the file README.me
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
// Calls the init() function
init();
