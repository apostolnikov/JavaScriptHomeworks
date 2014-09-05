function roundNumber(value) {
    var withoutDecimal = Math.floor(value);
    var rounded = Math.round(value);
    var result = withoutDecimal + '\n' + rounded;
    return result;
}

console.log(roundNumber(22.7));
console.log(roundNumber(12.3));
console.log(roundNumber(58.7));