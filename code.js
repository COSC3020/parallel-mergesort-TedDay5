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
    let left = low;
    let right = middle + 1;
    
    for(let i = low; i <= high; i++) {
        if(left <= middle && (right > high || array[left] < array[right])) {
            temp[i] = array[left++];
        }
        else {
            temp[i] = array[right++];
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
