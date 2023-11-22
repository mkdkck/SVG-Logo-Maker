const Square = require('../lib/shapes/square');

describe('render Square code with color input', () => {
  test('Square', () => {
    const shape = new Square ('yellow');
    const codeExpected = '<rect x="25" y="25" width="250" height="250" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 