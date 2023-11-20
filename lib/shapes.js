const logoElements = require('./logoElements.js');


class shapes extends logoElements {
    
    constructor (shape, color) {
        super (shape,color);
    }

    render

}



class Header extends Component {
  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate(
      new Date()
    )}</p></header>`;
  }
}

module.exports = Header;