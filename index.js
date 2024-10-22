// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a description of your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Provide installation instructions:",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide usage information:",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Provide contribution guidelines:",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Provide test instructions:",
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose a license for your project:",
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: "Enter your GitHub username:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter your email address:",
  },
];

// Function to generate the README content
const generateREADME = (data) => `
# ${data.title}

![License](https://img.shields.io/badge/license-${data.license}-green)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me via <a href="mailto:${data.email}">${data.email}</a>.  
You can also find more of my work on <a href="https://github.com/${data.github}">GitHub</a>.
`;

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFileSync(`${fileName}.md`, data);
  console.log(`${fileName}.md has been generated successfully!`);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate README content
    const readmeContent = generateREADME(answers);
    
    // Create a valid file name by replacing spaces with underscores
    const fileName = answers.title.replace(/\s+/g, '_');

    // Write to a dynamic file name based on the title
    writeToFile(fileName, readmeContent);
  });
}

// Function call to initialize app
init();
