const async = require('async');

async function parallelMergeSort(array, low, high, temp) {
    if(low >= high) {
        return;
    }
    let middle = Math.floor((low + high) / 2);
    const left = parallelMergeSort(array, low, middle, temp);
    const right = parallelMergeSort(array, middle + 1, high, temp);

    await Promise.all([left][right])
    merge(array, low, middle, high, temp)
}

function merge(array, low, middle, high, temp) {
    for(let i = low; i <= high; i++) {
        if(low <= middle && (middle + 1 > high || array[low] < array[middle + 1])) {
            temp[i] = array[low++];
        }
        else {
            temp[i] = array[(middle + 1)++];
        }
    }
    for(let i = low; i <= high; i++) {
        array[i] = temp[i];
    }
}

async function mergeSort(array) {
    let temp = [];
    sort = await parallelMergeSort(array, 0, array.length - 1, temp);
}
