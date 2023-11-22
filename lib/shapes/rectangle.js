const LogoElements = require('../logoElements.js');

class Rectangle extends LogoElements {
  constructor (shapeColor) {
      super ('', shapeColor,'','');
  }

  renderCode () {
      return `<rect x="25" y="50" width="250" height="100" fill="${this.shapeColor}"/>`
      }
}

module.exports = Rectangle;