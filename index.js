const inquirer = require ('inquirer');
const { writeFile } = require('fs').promises;
const { generateSVG } = require ('./lib/generateSVG.js')

// inquirer sections of questions
const questions = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want for your Logo:',
        choices: ['Circle',
          'Square',
          'Triangle',
          'Rectangle',
          'Hexagon']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please give a color to your shape (color name or Hex number):',
      },
      {
        type: 'input',
        name: 'text',
        message: 'Please enter text for the SVG Logo (no more than 3 characters)',
        validate: function(input){
          if (input.length <= 3) {
             return true;
          } else{
            return 'Input cannot exceed 3 characters'
        }}
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please give the text a color (color name or Hex number):',
      },
  ])
};


// function to write
questions()
    .then((data) =>
        writeFile('logo.svg', generateSVG(data)))
    .then(() => console.log('Successfully generated your SVG file'))
    .catch((err) => console.error(err));


