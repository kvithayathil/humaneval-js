//// BEGIN - PROMPT
/**
 * Given list of numbers (of at least two elements), apply a linear transform to that list,
 * such that the smallest number will become 0 and the largest will become 1
 * @param {number[]} numbers
 * @returns {number[]}
 * @example
 * // returns [0.0, 0.25, 0.5, 0.75, 1.0]
 * rescaleToUnit([1.0, 2.0, 3.0, 4.0, 5.0]);
 */
function rescaleToUnit(numbers) {
//// BEGIN - CANONICAL SOLUTION
    const minNumber = Math.min(...numbers);
    const maxNumber = Math.max(...numbers);
    return numbers.map(x => (x - minNumber) / (maxNumber - minNumber));
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([2.0, 49.9]), [0.0, 1.0]);
    assert.deepStrictEqual(candidate([100.0, 49.9]), [1.0, 0.0]);
    assert.deepStrictEqual(candidate([1.0, 2.0, 3.0, 4.0, 5.0]), [0.0, 0.25, 0.5, 0.75, 1.0]);
    assert.deepStrictEqual(candidate([2.0, 1.0, 5.0, 3.0, 4.0]), [0.25, 0.0, 1.0, 0.5, 0.75]);
    assert.deepStrictEqual(candidate([12.0, 11.0, 15.0, 13.0, 14.0]), [0.25, 0.0, 1.0, 0.5, 0.75]);
}

//// BEGIN - CHECK
check(rescaleToUnit);