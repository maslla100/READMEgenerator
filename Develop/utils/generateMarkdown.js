
//Render license section
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'GPLv3':
            return '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'Apache 2.0':
            return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        case 'BSD 3-Clause':
            return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
        default:
            return '';
    }
}


function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return '[MIT License](https://opensource.org/licenses/MIT)';
        case 'GPLv3':
            return '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
            return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
        case 'BSD 3-Clause':
            return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
        default:
            return '';
    }
}


function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License

This project is licensed under the ${license}. For more information, see the link below.
${renderLicenseLink(license)}
`;
    } else {
        return '';
    }
}


function generateMarkdown(data) {
    let markdownContent = `# ${data.title}

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
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Badges
${renderLicenseBadge(data.license)}

`;

    if (data.features) {
        markdownContent += `## Features
${data.features}
`;
    }

    if (data.tests) {
        markdownContent += `## Tests
${data.tests}
`;
    }

    markdownContent += `## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or [GitHub](https://github.com/${data.github}).

`;

    return markdownContent;
}

module.exports = generateMarkdown;
