function createArray(arr) {
    var result = '';
    for(var i = 0; i <= 20; i += 1) {
        arr[i] = i * 5;
        result += arr[i] + ', ';
    }
    console.log(result);
}


createArray([]);