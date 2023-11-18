const Shapes = require ('./shapes.js');
const Text = require ('./text.js');


function generateSVG(shape,color,text,textColor) {
  const shapeCode = new Shapes(shape, color);
  const textCode = new Text(text,textColor);


  return `<svg version="1.1"
  width="300" height="300"
  xmlns="http://www.w3.org/2000/svg">

<${shape} fill="${color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
  `;
}

module.exports = { generateSVG };