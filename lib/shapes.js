const LogoElements = require('./logoElements.js');


class Shapes extends LogoElements {
    
    constructor (shape,color) {
        super (shape,color);
    }

    renderCode () {
      let svgShape
      switch (this.shape){
        case 'Square': 
          svgShape = `<rect x="25" y="25" width="250" height="250" fill="${this.color}"/>`
          break;
        case 'Triangle': 
          svgShape = `<polygon points="150 25 50 220 250 220" fill="${this.color}"/>`
          break;
        case 'Rectangle': 
          svgShape = `<rect x="25" y="75" width="250" height="100" fill="${this.color}"/>`
          break;
        case 'Hexagon': 
          svgShape = `<polygon points="200 50 100 50 50 150 100 250 200 250 250 150" fill="${this.color}"/>`
          break;
        }
      return svgShape;
      }
}

module.exports = Shapes;