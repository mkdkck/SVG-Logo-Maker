const Text = require('../lib/text.js');

describe('render text code with color and text input', () => {
  test('text line generated unsuccessfully', () => {
    const text = new Text('ABC','yellow');
    const codeExpected = '<text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">ABC</text>'
    expect(text.renderCode()).toEqual(codeExpected);
  });
});
 