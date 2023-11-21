const Shapes = require('../lib/shapes');

describe('render shapes code with color and shape input', () => {
  test('Square', () => {
    const shape = new Shapes('Square','color');
    const codeExpected = '<rect x="25" y="25" width="250" height="250" fill="color"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
  test('Triangle', () => {
    const shape = new Shapes('Triangle','color');
    const codeExpected = '<polygon points="150 25 50 220 250 220" fill="color"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
  test('Rectangle', () => {
    const shape = new Shapes('Rectangle','color');
    const codeExpected = '<rect x="25" y="75" width="250" height="100" fill="color"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
  test('Hexagon', () => {
    const shape = new Shapes('Hexagon','color');
    const codeExpected = '<polygon points="200 50 100 50 50 150 100 250 200 250 250 150" fill="color"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 