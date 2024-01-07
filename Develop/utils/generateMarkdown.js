

function renderLicenseBadge(license) {
    // Implement logic to return the correct badge based on the license
}

function renderLicenseLink(license) {
    // Implement logic to return the correct license link
}

function renderLicenseSection(license) {
    // Implement logic for the license section of the README
}

function generateMarkdown(data) {
    return `# ${data.title}
    ## Description

${data.description}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)


## Installation
- ${data.installation}


## Usage
- ${data.usage}


## Credits
- ${data.credits}


## License
${renderLicenseSection(data.license)}
- [License]${renderLicenseLink(data.license)}


## Badges
- [License Badge]${renderLicenseBadge(data.license)}



## User input for Features
- ${data.features}


## User input for Tests
- ${data.tests}


## Questions
- [Email]${data.email}
    - [GitHub]${data.github}





---


// Add other sections like Description, Installation, etc., based on user input.

`;
}

module.exports = generateMarkdown;

