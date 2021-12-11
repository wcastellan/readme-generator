// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    // title of project
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please give a title to your project!');
                return false;
            }
        }
    },
    // description of project
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please give a description!');
                return false;
            }
        }
    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps required to install your project for the Installation section.'  
    },
    // usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project for the Usage section.'
    },
    // license options 
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['Wyatt', 'MIT', 'Raleigh']
    },
    // contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'Name the people who contributed to the project.'
    },
    // applicable tests
    {
        type: 'input',
        name: 'tests',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.'
    },
    // github
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.'
    },
    // email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address.'
    }
]
        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success! your README.md file has been generated');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
