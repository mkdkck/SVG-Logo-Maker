const Circle = require('./shapes/circle.js');
const Hexagon = require('./shapes/hexagon.js');
const Rectangle = require('./shapes/rectangle.js');
const Square = require('./shapes/square.js');
const Triangle = require('./shapes/triangle.js');
const Text = require ('./text.js');
let shapeCode;

function generateSVG(data) {
   
  switch (data.shape){
    case 'Square': 
    shapeCode = new Square (data.shapeColor);
      break;
    case 'Triangle': 
    shapeCode = new Triangle (data.shapeColor);
      break;
    case 'Rectangle': 
    shapeCode = new Rectangle (data.shapeColor);
      break;
    case 'Hexagon': 
    shapeCode = new Hexagon (data.shapeColor);
      break;
    case 'Circle':
    shapeCode = new Circle (data.shapeColor);
      break;
    }


  const textCode = new Text(data.text,data.textColor);


  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

${shapeCode.renderCode()}

${textCode.renderCode()}

</svg>`;
}

module.exports = { generateSVG };