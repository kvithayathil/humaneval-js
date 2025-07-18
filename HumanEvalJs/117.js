//// BEGIN - PROMPT
/**
 * Given a string s and a natural number n, you have been tasked to implement
 * a function that returns an array of all words from string s that contain exactly
 * n consonants, in order these words appear in the string s.
 * If the string s is empty then the function should return an empty array.
 * Note: you may assume the input string contains only letters and spaces.
 * Examples:
 * selectWords("Mary had a little lamb", 4) ==> ["little"]
 * selectWords("Mary had a little lamb", 3) ==> ["Mary", "lamb"]
 * selectWords("simple white space", 2) ==> []
 * selectWords("Hello world", 4) ==> ["world"]
 * selectWords("Uncle sam", 3) ==> ["Uncle"]
 */
function selectWords(s, n) {
//// BEGIN - CANONICAL SOLUTION
    const result = [];
    if (!s) return result;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const words = s.split(' ');
    for (const word of words) {
        let nConsonants = 0;
        for (const char of word) {
            if (!vowels.has(char.toLowerCase())) {
                nConsonants++;
            }
        }
        if (nConsonants === n) {
            result.push(word);
        }
    }
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate("Mary had a little lamb", 4), ["little"], "First test error: " + candidate("Mary had a little lamb", 4));
    assert.deepStrictEqual(candidate("Mary had a little lamb", 3), ["Mary", "lamb"], "Second test error: " + candidate("Mary had a little lamb", 3));
    assert.deepStrictEqual(candidate("simple white space", 2), [], "Third test error: " + candidate("simple white space", 2));
    assert.deepStrictEqual(candidate("Hello world", 4), ["world"], "Fourth test error: " + candidate("Hello world", 4));
    assert.deepStrictEqual(candidate("Uncle sam", 3), ["Uncle"], "Fifth test error: " + candidate("Uncle sam", 3));
    assert.deepStrictEqual(candidate("", 4), [], "1st edge test error: " + candidate("", 4));
    assert.deepStrictEqual(candidate("a b c d e f", 1), ["b", "c", "d", "f"], "2nd edge test error: " + candidate("a b c d e f", 1));
}

//// BEGIN - CHECK
check(selectWords);