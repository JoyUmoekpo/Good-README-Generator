const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const markDown = require('./generateMarkdown.js');

const questions = [
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "User"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "Email",
    },
    {
        type: "input",
        message: "Please enter your project title.",
        name: "Title",
    },
    {
        type: "input",
        message: "Please enter a description for this project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What command should be run to start tests?",
        name: "Test",
    },
    {
        type: "input",
        message: "Is there other information about this project you would like to add?",
        name: "Information",
    },
    {
        type: "input",
        message: "What is the license for your project",
        name: "License",
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
    axios.get ("https://api.github.com/users/" + responses.User).then(response => {
        fs.writeToFile('README.md', markDown(responses), (err) => {
            if (err) {
                throw err;
            };
        });
    })
    })
}

// Function call to initialize app
init();