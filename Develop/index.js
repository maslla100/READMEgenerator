

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your application:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for the Questions section:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username for the Questions section:'
    }
    // Add other questions here for description, installation, etc.
    // Refer to the acceptance criteria for all required questions.
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
}
// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}
// Call to initialize app
init();

