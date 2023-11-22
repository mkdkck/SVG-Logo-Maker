const Hexagon = require('../lib/shapes/hexagon');

describe('render Hexagon code with color input', () => {
    test('Hexagon', () => {
    const shape = new Hexagon('yellow');
    const codeExpected = '<polygon points="200 0 100 0 50 90 100 200 200 200 250 90" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 