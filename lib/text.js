const LogoElements = require("./logoElements");

class Text extends LogoElements {
    constructor (text,textColor) {
        super('','',text,textColor);
    }

    renderCode () {
    return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Text;