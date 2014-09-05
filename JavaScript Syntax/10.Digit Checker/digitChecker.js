function checkDigit(num) {
    var result = Math.floor((num % 1000) / 100);
    if (result === 3) {
        console.log(true);    
    } else {
        console.log(false);
    }
    
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);