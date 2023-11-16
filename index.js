const inquirer = require ('inquirer');
const { writeFile } = require('fs').promises;

// inquirer sections of questions
const questions = () => {
    return inquirer.prompt([
      {
        type: 'maxlength-input',
        name: 'text',
        message: 'Please enter text for the SVG Logo (no more than 3 characters)',
        maxLength: 3
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please give the text a color (color name or Hex number):',
      },
      {
        type: 'list',
        name: 'shapes',
        message: 'What shape do you want for your Logo:',
        choices: ['Circle',
          'Square',
          'Triangle',
          'Rectengle',
          'Hexagon']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please give a color to your shape (color name or Hex number):',
      },
  ])
};


// function to write
questions()
    .then((data) =>
        writeFile('logo.svg', generateSVG(data)))
    .then(() => console.log('Successfully generated your SVG file'))
    .catch((err) => console.error(err));


