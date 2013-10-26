function mergeArray(arr1, arr2) {
    for (var one in arr2) {
        arr1.push(arr2[one]);
    }

    return arr1;
}