const LogoElements = require('../logoElements.js');

class Square extends LogoElements {
  constructor (shapeColor) {
      super ('', shapeColor,'','');
  }

  renderCode () {
      return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
      }
}

module.exports = Square;