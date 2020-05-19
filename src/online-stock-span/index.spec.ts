import { expect } from 'chai';
import StockSpanner from './index';

describe('StockSpanner', () => {
  it('should create empty stack upon initialization', () => {
    const sp = new StockSpanner();
    expect(Array.isArray(sp.stack)).to.be.equal(true);
    expect(sp.stack).to.have.length(0);
  });
  it('should produce correct sequence of days', () => {
    const sp = new StockSpanner();
    expect(sp.next(100)).to.be.equal(1);
    expect(sp.next(80)).to.be.equal(1);
    expect(sp.next(60)).to.be.equal(1);
    expect(sp.next(70)).to.be.equal(2);
    expect(sp.next(60)).to.be.equal(1);
    expect(sp.next(75)).to.be.equal(4);
    expect(sp.next(85)).to.be.equal(6);
  });
});
