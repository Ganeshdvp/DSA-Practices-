let arr = [5, 4, 7, 8, 2, 6, 9];

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivotValue = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= j && arr[i] <= pivotValue) i++;
        while (i <= j && arr[j] > pivotValue) j--;

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr); // [2, 4, 5, 6, 7, 8, 9]
// Time complexity :- O(n*2)
// Space complexity :- O(n)