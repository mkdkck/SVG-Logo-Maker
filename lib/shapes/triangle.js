const LogoElements = require('../logoElements.js');

class Triangle extends LogoElements {
    constructor (shapeColor) {
        super ('', shapeColor,'','');
    }

    renderCode () {
      return `<polygon points="150 25 50 180 250 180" fill="${this.shapeColor}"/>`
      }
}

module.exports = Triangle;