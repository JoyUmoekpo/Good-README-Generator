const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const markDown = require('generateMarkdown.js');

const questions = [
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "userName"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "userEmail",
    },
    {
        type: "input",
        message: "Please enter your project title.",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Please enter a description for this project.",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "What command should be run to start tests?",
        default: "`npm test`",
        name: "projectTest",
    },
    {
        type: "input",
        message: "Any additional information about the project?",
        name: "projectInfo",
    },
    {
        type: "input",
        message: "Please input an appropriate license type for this project",
        default: "MIT",
        name: "projectLicense",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();