const LogoElements = require('../logoElements.js');

class Hexagon extends LogoElements {
  constructor (shapeColor) {
      super ('', shapeColor,'','');
  }

  renderCode () {
      return `<polygon points="200 0 100 0 50 90 100 200 200 200 250 90" fill="${this.shapeColor}"/>`
  }
}

module.exports = Hexagon;