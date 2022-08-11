// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
function renderLicenseLink(license) {
  if (license === "No License") {
    return " ";
  } else {
    return `(#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return " ";
  } else {
    return `This project is licensed by the ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br>
  ${renderLicenseBadge(data.license)}
  ##Description
  <br>
  ${data.describe}
  <br>
  ##Table of Contents
  <br>
  [Installation] (#installation)
  [Usage] (#usage)
  [License] ${renderLicenseLink(data.license)}
  [Contributing] (#contributing)
  [Test] (#test)
  [Questions] (#questions)
  <br>
  ##Installation
  ${data.install}
  <br>
  ##Usage
  ${data.use}
  <br>
  ##License
  ${renderLicenseSection(data.license)}
  <br>
  ##Contributing
  ${data.contribution}
  <br>
  ##Test
  ${data.testing}
  <br>
  ##Questions
  Feel free to reach me at my github ${data.user} or my email ${data.email}
`;
}

module.exports = generateMarkdown;