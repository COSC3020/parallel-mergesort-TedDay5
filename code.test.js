const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

async function testParallelMergeSort() {
    let array = [38, 27, 43, 3, 9, 82, 10];
    let expected = [3, 9, 10, 27, 38, 43, 82];
    await mergeSort(array);
    assert.deepStrictEqual(array, expected, 'Not sorted correctly');
    console.log('Test passed');
}

testParallelMergeSort();
