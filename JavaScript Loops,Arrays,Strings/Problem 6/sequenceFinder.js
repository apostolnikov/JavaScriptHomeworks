function findMaxSequence(arr) {

    var counterTemp = 1;
    var counter = 1;
    var positionOfWord = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            counterTemp++;
        } else {
            counterTemp = 1;
        }
        if (counterTemp > counter) {
            counter = counterTemp;
            positionOfWord = i;
        }
    }

    var result = '[';
    for (var j = 0; j < counter - 1; j++) {
        result += arr[positionOfWord] + ', ';
    }
    result += arr[positionOfWord] + ']';
    console.log(result);

}


findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);