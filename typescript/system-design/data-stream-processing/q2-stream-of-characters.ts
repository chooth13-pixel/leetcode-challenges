// Data Stream Processing 
// Title: Q2. Stream of Characters 
// Problem Link: https://leetcode.com/problems/stream-of-characters/description/?envType=problem-list-v2&envId=ssd-ssd2-data-stream-processing 
// Difficulty: Hard
// Time O(n x m x k) Space O(n + m) where n = prefix length, m = dictionary length, k = number of query 

class Trie {
    private strings = new Set<string>();
    private letterIndex = new Map<string, string[]>();

    insert(word: string): void {
        const startLetter = word.charAt(0);
        const wordList = this.letterIndex.get(startLetter) ?? [];
        wordList.push(word);
        this.letterIndex.set(startLetter, wordList);
        this.strings.add(word);
    }

    search(word: string): boolean {
        return this.strings.has(word);
    }

    startsWith(prefix: string): boolean {
        const startLetter = prefix.charAt(0);
        const wordList = this.letterIndex.get(startLetter) ?? [];
        return wordList.some((str) => str.startsWith(prefix));
    }
}

class StreamChecker {
    dictionary: Trie
    prefix: string
    constructor(words: string[]) {
        this.prefix = ''
        this.dictionary = new Trie()
        for (const w of words) {
            this.dictionary.insert(w)
        }
    }

    query(letter: string): boolean {
        this.prefix = this.prefix === '' ? letter : this.prefix + letter
        if (this.dictionary.search(this.prefix)) return true
        let substr = this.prefix.substring(1)
        this.prefix = this.dictionary.startsWith(this.prefix) ? this.prefix : ''
        while (substr !== '') {
            if (this.prefix === '' && this.dictionary.startsWith(substr)) {
                this.prefix = substr
            }
            if (this.dictionary.search(substr)) return true
            substr = substr.substring(1)
        }
        return false
    }
}
