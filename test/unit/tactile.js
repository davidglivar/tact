import { tactile } from '../../src/tactile';

describe('tactile', () => {
  let node = null;
  let tact = null;
  beforeEach(() => {
    node = document.createElement('div');
    tact = tactile(node);
  });
  afterEach(() => {
    node = null;
    tact = null;
  });

  it('is a public function', () => {
    expect(tactile).to.be.a('function');
  });

  it('returns an object that is an EventEmitter', () => {
    expect(tact).to.be.an('object');
    expect(tact).to.have.property('_events');
    expect(tact)
      .to.have.property('emit')
      .and.to.be.a('function');
    expect(tact)
      .to.have.property('on')
      .and.to.be.a('function');
    expect(tact)
      .to.have.property('removeListener')
      .and.to.be.a('function');
  });

  describe('bind()', () => {

    it('is a public function on the result', () => {
      expect(tact.bind).to.be.a('function');
    });

    it('returns false if result has already been bound when called');
    it('returns true if result has not been bound when called');
  });

  describe('unbind()', () => {

    it('is a public function on the result', () => {
      expect(tact.unbind).to.be.a('function');
    });

    it('returns false if result is already unbound when called');
    it('returns true if result has not been unbound when called');
  });
});
