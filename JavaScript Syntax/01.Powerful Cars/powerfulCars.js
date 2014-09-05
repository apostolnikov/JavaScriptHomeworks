function convertKWtoHP(value) {
    var afterConvert = value * 1.34102209;
    afterConvert = afterConvert.toFixed(2);
    return afterConvert;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));