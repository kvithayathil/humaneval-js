//// BEGIN - PROMPT
/**
 * You are given a 2 dimensional data, as a nested lists,
 * which is similar to matrix, however, unlike matrices,
 * each row may contain a different number of columns.
 * Given lst, and integer x, find integers x in the list,
 * and return list of tuples, [(x1, y1), (x2, y2) ...] such that
 * each tuple is a coordinate - (row, columns), starting with 0.
 * Sort coordinates initially by rows in ascending order.
 * Also, sort coordinates of the row by columns in descending order.
*
* Examples:
* getRow([
*   [1,2,3,4,5,6],
*   [1,2,3,4,1,6],
*   [1,2,3,4,5,1]
* ], 1) == [[0, 0], [1, 4], [1, 0], [2, 5], [2, 0]]
* getRow([], 1) == []
* getRow([[], [1], [1, 2, 3]], 3) == [[2, 2]]
*/
function getRow(lst, x) {
//// BEGIN - CANONICAL SOLUTION
    const coords = [];
    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst[i].length; j++) {
            if (lst[i][j] === x) {
                coords.push([i, j]);
            }
        }
    }
    coords.sort((a, b) => b[1] - a[1]);
    coords.sort((a, b) => a[0] - b[0]);
    return coords;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(
        candidate(
            [
                [1,2,3,4,5,6],
                [1,2,3,4,1,6],
                [1,2,3,4,5,1]
            ],
            1
        ),
        [
            [0, 0], [1, 4], [1, 0], [2, 5], [2, 0]
        ]
    );
    assert.deepStrictEqual(
        candidate(
            [
                [1,2,3,4,5,6],
                [1,2,3,4,5,6],
                [1,2,3,4,5,6],
                [1,2,3,4,5,6],
                [1,2,3,4,5,6],
                [1,2,3,4,5,6]
            ],
            2
        ),
        [
            [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]
        ]
    );
    assert.deepStrictEqual(
        candidate(
            [
                [1,2,3,4,5,6],
                [1,2,3,4,5,6],
                [1,1,3,4,5,6],
                [1,2,1,4,5,6],
                [1,2,3,1,5,6],
                [1,2,3,4,1,6],
                [1,2,3,4,5,1]
            ],
            1
        ),
        [
            [0, 0], [1, 0], [2, 1], [2, 0], [3, 2], [3, 0],
            [4, 3], [4, 0], [5, 4], [5, 0], [6, 5], [6, 0]
        ]
    );
    assert.deepStrictEqual(candidate([], 1), []);
    assert.deepStrictEqual(candidate([[1]], 2), []);
    assert.deepStrictEqual(candidate([[], [1], [1, 2, 3]], 3), [[2, 2]]);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(getRow);