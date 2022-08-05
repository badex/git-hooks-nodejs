const otherfile = require('../src/otherfile');

it('should return correct otherfile', () => {
  const result = otherfile();
  expect(result).toBe('String from other-file.js');
});
