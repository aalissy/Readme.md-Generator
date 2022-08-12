// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Returns badge based on the license selected
  // Returns an empty string if No License was inputted
  if(license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "GPL 3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "BSD 3") {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === "No License") {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// If No License was inputted returns an empty string
// Otherwise it returns the Table of Contents section License with a link to the desired tab
function renderLicenseLink(license) {
  if (license === "No License") {
    return " ";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// If No License is selected returns an empty string
// Otherwise it returns the license section with the displayed license value
function renderLicenseSection(license) {
  if (license === "No License") {
    return " ";
  } else {
    return `## License 
  This project is licensed by the ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
// Defines a function generateMarkdown which takes in the user's data as a parameter
// Then using the user's inputs it proceeds to generate a README
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.describe}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.use}

${renderLicenseSection(data.license)}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.testing}

## Questions
Feel free to reach me at my github [https://github.com/${data.user}/] or my email ${data.email}
`;
}

// Exports the generateMarkdown
module.exports = generateMarkdown;
