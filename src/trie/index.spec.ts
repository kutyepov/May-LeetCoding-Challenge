import { expect } from 'chai';
import Trie from './index';

describe('Trie', () => {
  let trie = new Trie();
  beforeEach(() => {
    trie.insert('apple');
  });

  it('should find inserted word', () => {
    expect(trie.search('apple')).to.be.equal(true);
  });

  it('should NOT find part of an inserted word', () => {
    expect(trie.search('a')).to.be.equal(false);
    expect(trie.search('ap')).to.be.equal(false);
    expect(trie.search('app')).to.be.equal(false);
    expect(trie.search('appl')).to.be.equal(false);
  });

  it('should NOT find a word that was not inserted', () => {
    expect(trie.search('banana')).to.be.equal(false);
  });

  it('should return true if inserted word starts with given characters', () => {
    expect(trie.startsWith('a')).to.be.equal(true);
    expect(trie.startsWith('app')).to.be.equal(true);
    expect(trie.startsWith('appl')).to.be.equal(true);
    expect(trie.startsWith('apple')).to.be.equal(true);
  });

  it('should return false if inserted word does not start with given characters', () => {
    expect(trie.startsWith('e')).to.be.equal(false);
    expect(trie.startsWith('el')).to.be.equal(false);
    expect(trie.startsWith('elp')).to.be.equal(false);
    expect(trie.startsWith('elpp')).to.be.equal(false);
    expect(trie.startsWith('elppa')).to.be.equal(false);
  });
});
