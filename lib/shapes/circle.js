const LogoElements = require('../logoElements.js');

class Circle extends LogoElements {
  constructor (shapeColor) {
      super ('', shapeColor,'','');
  }

  renderCode () {
      return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
  }
}

module.exports = Circle;