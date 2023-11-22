const Rectangle = require('../lib/shapes/rectangle');

describe('render Rectangle code with color input', () => {
   test('Rectangle', () => {
    const shape = new Rectangle('yellow');
    const codeExpected = '<rect x="25" y="75" width="250" height="100" fill="yellow"/>'
    expect(shape.renderCode()).toEqual(codeExpected);
  });
});
 