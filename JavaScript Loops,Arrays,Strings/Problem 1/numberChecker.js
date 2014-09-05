function printNumbers(n) {
    var result = '';
    for(var i = 1; i < n; i += 1) {
        if(!(i % 5 === 0) || (i % 4 === 0)) {
            result += ' ' + i + ',';
        } 
    }
    console.log(result);
}

printNumbers(20);