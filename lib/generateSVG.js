const Shapes = require ('./shapes.js');
const Text = require ('./text.js');


function generateSVG(data) {
  const shapeCode = new Shapes(data.shape, data.shapeColor);
  const textCode = new Text(data.text,data.textColor);


  return `<svg version="1.1"
  width="300" height="300"
  xmlns="http://www.w3.org/2000/svg">

${shapeCode.renderCode()}

${textCode.renderCode()}

</svg>`;
}

module.exports = { generateSVG };