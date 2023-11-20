const LogoElements = require('../lib/logoElements.js');

describe('logoElements', () => {
  test('should throw error if color input is null', () => {
    const logoElement = new LogoElements('shape','','text', 'textColor');
    const errColor = new Error('Please give a color to the shape')
    expect(() => logoElement.renderCode()).toThrow(errColor);
  });
  test('should throw error if text input is null', () => {
    const logoElement = new LogoElements('shape','color','', 'textColor');
    const errText = new Error('Please give a text to your logo')
      expect(() => logoElement.renderCode()).toThrow(errText);
  });
  test('should throw error if text color input is null', () => {
    const logoElement = new LogoElements('shape','color','text', '');
    const errTextColor = new Error('Please give a color to your text')
    expect(() => logoElement.renderCode()).toThrow(errTextColor);
  });
});
 