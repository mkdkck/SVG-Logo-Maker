const Triangle = require("../lib/shapes/triangle");

describe('render Triangle code with color input', () => {
   test('Triangle', () => {
    const shape = new Triangle('yellow');
    const codeExpected = '<polygon points="150 25 50 220 250 220" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 