function bitChecker(value) {
    var mask = value >> 3;
    if(mask & 1 === 1) {
        return true;

    } else {
        return false;
    }
}


console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));