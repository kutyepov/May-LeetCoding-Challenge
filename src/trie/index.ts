class TrieNode {
  private SIZE = 26;
  private OFFSET = 'a'.charCodeAt(0);
  private _children: TrieNode[];
  private _isLeaf: boolean;

  constructor() {
    this._isLeaf = false;
    this._children = new Array(this.SIZE);
  }

  leafify(): void {
    this._isLeaf = true;
  }

  isLeaf(): boolean {
    return this._isLeaf;
  }

  get(ch: string): TrieNode {
    return this._children[ch.charCodeAt(0) - this.OFFSET];
  }

  set(ch: string, node: TrieNode) {
    this._children[ch.charCodeAt(0) - this.OFFSET] = node;
  }

  contains(ch: string): boolean {
    return this.get(ch) !== undefined;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentNode: TrieNode = this.root;

    for (const ch of word) {
      if (!currentNode.contains(ch)) {
        currentNode.set(ch, new TrieNode());
      }
      currentNode = currentNode.get(ch);
    }

    currentNode.leafify();
  }

  search(word: string): boolean {
    let currentNode: TrieNode = this.root;

    for (const ch of word) {
      if (currentNode.contains(ch)) {
        currentNode = currentNode.get(ch);
      } else {
        return false;
      }
    }

    return currentNode.isLeaf();
  }

  startsWith(prefix: string): boolean {
    let currentNode: TrieNode = this.root;

    for (const ch of prefix) {
      if (currentNode.contains(ch)) {
        currentNode = currentNode.get(ch);
      } else {
        return false;
      }
    }

    return true;
  }
}

export default Trie;
