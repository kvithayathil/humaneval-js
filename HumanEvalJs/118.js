//// BEGIN - PROMPT
/**
 * You are given a word. Your task is to find the closest vowel that stands between
 * two consonants from the right side of the word (case sensitive).
 *
 * Vowels in the beginning and ending doesn't count. Return empty string if you didn't
 * find any vowel that meets the above condition.
 *
 * You may assume that the given string contains English letters only.
 *
 * Example:
 * getClosestVowel("yogurt") ==> "u"
 * getClosestVowel("FULL") ==> "U"
 * getClosestVowel("quick") ==> ""
 * getClosestVowel("ab") ==> ""
 *
 * @param {string} word
 * @returns {string}
 */
function getClosestVowel(word) {
//// BEGIN - CANONICAL SOLUTION
    if (word.length < 3) {
        return "";
    }
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    for (let i = word.length - 2; i > 0; i--) {
        const char = word[i];
        if (vowels.has(char)) {
            const prev = word[i - 1];
            const next = word[i + 1];
            if (!vowels.has(prev) && !vowels.has(next)) {
                return char;
            }
        }
    }
    return "";
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate("yogurt"), "u");
    assert.strictEqual(candidate("full"), "u");
    assert.strictEqual(candidate("easy"), "");
    assert.strictEqual(candidate("eAsy"), "");
    assert.strictEqual(candidate("ali"), "");
    assert.strictEqual(candidate("bad"), "a");
    assert.strictEqual(candidate("most"), "o");
    assert.strictEqual(candidate("ab"), "");
    assert.strictEqual(candidate("ba"), "");
    assert.strictEqual(candidate("quick"), "");
    assert.strictEqual(candidate("anime"), "i");
    assert.strictEqual(candidate("Asia"), "");
    assert.strictEqual(candidate("Above"), "o");
    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(true, true);
}

//// BEGIN - CHECK
check(getClosestVowel);