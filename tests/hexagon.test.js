const Hexagon = require('../lib/shapes/hexagon');

describe('render Hexagon code with color input', () => {
    test('Hexagon', () => {
    const shape = new Hexagon('yellow');
    const codeExpected = '<polygon points="200 50 100 50 50 150 100 250 200 250 250 150" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 