import { tactile } from '../../src/tactile';

describe('tactile', () => {

  it('is a public function', () => {
    expect(tactile).to.be.a(
      'function'
    , 'tactile is not a function'
    );
  });

  it('returns an object', () => {
    let result = tactile(document.createElement('div'));
    expect(result).to.be.an(
      'object'
    , 'tactile does not return an object'
    );
  });

  describe('bind()', () => {

  });

  describe('unbind()', () => {

  });
});
