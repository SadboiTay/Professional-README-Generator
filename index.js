// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title:",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the steps required to install your project:",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter an installation quide for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide usage inctructions for your project!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to include a license for your project?",
        default: true
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project:",
        choices: [
            'Apache License 2.0',
            'Boost Software License',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'CCO-1.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'ISC',
            'MIT',
            'Mozilla Public License 2.0',
            'SIL Open Font License 1.1',
            'The Unlicense'
        ],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
            return true;
            } else {
            return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidlines for other developers:",
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please provide contribution guidlines for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests you've written for your project:",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please provide testing examples!");
                return false;
            }
        }
    }
];

// const mockData = {
//     username: 'SadboiTay',
//     email: 'tg.hakes@gmail.com',
//     title: 'Professional README Generator',
//     description: `Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.
    
// The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

// There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.`,
//     installation: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//     usage: `Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
//     ![alt text](assets/images/screenshot.png)`,
//     license: 'The Unlicense',
//     contributing: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.',
//     tests: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
// }

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        }

        console.log('README generated!');
    })
}

const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => generateMarkdown(readmeData))
    .then(markdownContent => writeToFile(markdownContent))
    .catch(err => {
        console.log(err);
    });

    // mockdata testing
    // writeToFile(generateMarkdown(mockData));
}

init();
