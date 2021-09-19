// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'Boost Software License') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  if (license === 'CC-BY-4.0') {
    return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
  }
  if (license === 'CC-BY-SA-4.0') {
    return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
  }
  if (license === 'CCO-1.0') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  if (license === 'GNU GPLv2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
  if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === 'SIL Open Font License 1.1') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  }
  if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  if (license === '') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'Apache License 2.0') {
    return `View terms and conditions here: [Apache License 2.0](../utils/licenses/apachelicense.txt)`;
  }
  if (license === 'Boost Software License') {
    return `View terms and conditions here: [Boost Software License](../utils/licenses/boostlicense.txt)`;
  }
  if (license === 'CC-BY-4.0') {
    return `View terms and conditions here: [CC-BY-4.0](../utils/licenses/CC-BY-4.0license.txt)`;
  }
  if (license === 'CC-BY-SA-4.0') {
    return `View terms and conditions here: [CC-BY-SA-4.0](../utils/licenses/CC-BY-SA-4.0license.txt)`;
  }
  if (license === 'CCO-1.0') {
    return `View terms and conditions here: [CCO-1.0](../utils/licenses/CCO-1.0license.txt)`;
  }
  if (license === 'GNU GPLv2') {
    return `View terms and conditions here: [GNU GPLv2](../utils/licenses/GPLv2license.txt)`;
  }
  if (license === 'GNU GPLv3') {
    return `View terms and conditions here: [GNU GPLv3](../utils/licenses/GPLv3license.txt)`;
  }
  if (license === 'ISC') {
    return `View terms and conditions here: [ISC](../utils/licenses/ISClicense.txt)`;
  }
  if (license === 'MIT') {
    return `View terms and conditions here: [MIT](../utils/licenses/MITlicense.txt)`;
  }
  if (license === 'Mozilla Public License 2.0') {
    return `View terms and conditions here: [Mozilla Public License 2.0](../utils/licenses/mozillalicense.txt)`;
  }
  if (license === 'SIL Open Font License 1.1') {
    return `View terms and conditions here: [SIL Open Font License 1.1](../utils/licenses/SILOFlicense.txt)`;
  }
  if (license === 'The Unlicense') {
    return `View terms and conditions here: [The Unlicense](../utils/licenses/unlicense.txt)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'Apache License 2.0') {
    return `## Apache License 2.0
  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license === 'Boost Software License') {
    return `## Boost Software License
  A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license === 'CC-BY-4.0') {
    return `## Creative Commons Attribution 4.0 International
  Permits almost any use subject to providing credit and license notice. Frequently used for media assets and educational materials. The most common license for Open Access scientific publications. Not recommended for software.`;
  }
  if (license === 'CC-BY-SA-4.0') {
    return `## Creative Commons Attribution Share Alike 4.0 International
  Similar to CC-BY-4.0 but requires derivatives be distributed under the same or a similar, compatible license. Frequently used for media assets and educational materials. A previous version is the default license for Wikipedia and other Wikimedia projects. Not recommended for software.`;
  }
  if (license === 'CCO-1.0') {
    return `## Creative Commons Zero v1.0 Universal
  The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`;
  }
  if (license === 'GNU GPLv2') {
    return `## GNU General Public License v2.0
  The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.`;
  }
  if (license === 'GNU GPLv3') {
    return `## GNU General Public License v3.0
  Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  }
  if (license === 'ISC') {
    return `## ISC License
  A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`;
  }
  if (license === 'MIT') {
    return `## MIT License
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license === 'Mozilla Public License 2.0') {
    return `## Mozilla Public License 2.0
  Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
  }
  if (license === 'SIL Open Font License 1.1') {
    return `## SIL Open Font License 1.1
  The Open Font License (OFL) is maintained by SIL International. It attempts to be a compromise between the values of the free software and typeface design communities. It is used for almost all open source font projects, including those by Adobe, Google and Mozilla.`;
  }
  if (license === 'The Unlicense') {
    return `## The Unlicense
  A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { username, email, title, description, installation, usage, license, contributing, tests } = data;

  return `# ${title} 
  ${renderLicenseBadge(license)}

  # Description
  ${description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation
  ${installation}

  # Usage
  ${usage}

  # License
  ${renderLicenseSection(license)}

  ${renderLicenseLink(license)}

  # Contributing
  ${contributing}

  # Tests
  ${tests}

  # Questions

  * GitHub user: ${username}
  * https://github.com/${username}
  * Reach me at ${email} for additional questions
  `;
}

module.exports = generateMarkdown;
