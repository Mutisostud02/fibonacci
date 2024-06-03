function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        while (arr.length > 1) {
            let half = Math.ceil(arr.length / 2);
            let a = arr.slice(0, half);
            let b = arr.slice(half);
            return merge(mergeSort(a), mergeSort(b));   
        }     
    }
}
function merge(a, b) {
    let resultArr = [], leftIndex = 0, rightIndex = 0;
    while(leftIndex < a.length && rightIndex < b.length) {
        if(a[leftIndex] < b[rightIndex]){
            resultArr.push(a[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(b[rightIndex]);
            rightIndex++
        }
       
    }
    return resultArr.concat(a.slice(leftIndex)).concat(b.slice(rightIndex))

}