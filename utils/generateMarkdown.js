// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) { 
  if (data.license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${data.license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  if (data.license !== "None") {
    return `- [License](#license-📝)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) { 
  if (data.license !== "None") {
    return `## License 📝
This application is covered by the ${data.license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data)}

${data.username}

## Description 

${data.description}

## Table of Contents 

- [Installation](#installation-)

- [Usage](#info-)

${renderLicenseLink(data)}

- [Test](#tests-)

- [Credits](#contributing-)

## Installation 


${data.install}


## Usage 


${data.info}


${renderLicenseSection(data)}


## Tests 


${data.test}


## Credits 


${data.contributing}


## Questions 


If there are any questions, feel free to contact my email at: ${data.email}


You can also find me on GitHub at: [${data.username}](https://www.github.com/${data.username})

 `;
}

module.exports = generateMarkdown;
