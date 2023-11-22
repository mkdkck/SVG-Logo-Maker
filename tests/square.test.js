const Square = require('../lib/shapes/square');

describe('render Square code with color input', () => {
  test('Square', () => {
    const shape = new Square ('yellow');
    const codeExpected = '<rect x="50" y="0" width="200" height="200" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 