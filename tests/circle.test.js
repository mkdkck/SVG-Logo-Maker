const Circle = require("../lib/shapes/circle");

describe('render Circle code with color input', () => {
    test('Circle', () => {
    const shape = new Circle('yellow');
    const codeExpected = '<circle cx="150" cy="150" r="100" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});


