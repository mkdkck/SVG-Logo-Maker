const Triangle = require("../lib/shapes/triangle");

describe('render Triangle code with color input', () => {
   test('Triangle', () => {
    const shape = new Triangle('yellow');
    const codeExpected = '<polygon points="150 25 50 180 250 180" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 