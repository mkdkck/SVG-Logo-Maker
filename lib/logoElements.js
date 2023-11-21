class LogoElements {
    constructor (shape, shapeColor, text, textColor) {
        this.shape = shape
        this.shapeColor = shapeColor
        this.text = text
        this.textColor = textColor
    }

    renderCode (){
       if (this.shapeColor === '') {
        throw new Error ('Please give a color to the shape')
       }
       if (this.text === '') {
        throw new Error ('Please give a text to your logo')
       }
       if (this.textColor === '') {
        throw new Error ('Please give a color to your text')
       }
    }

}

module.exports = LogoElements ;