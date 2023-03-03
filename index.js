// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            messgae: 'PLease write a short description of your project.',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            message: 'what command should be run to intall dependencies',
            name: 'install',
        },
        {
            type:'input',
            message: 'What command should be run to run tests?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'what does the user need to know about using the repo?',
            name: 'info',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
        },
    ]);

}



// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(function(data){
        writeToFile("README.md", generateMarkdown(data))
    })
} 

// Function call to initialize app
init();
