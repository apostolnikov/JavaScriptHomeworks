function calcSupply(age,maxAge,foodPerDay) {
    var result = (maxAge - age) * 365 * foodPerDay;
    var strResult = result + ' of chocolate would be enough until I am ' + maxAge + ' years old.';
    return strResult
}

console.log(calcSupply(38,118,0.5));
console.log(calcSupply(20,87,2));
console.log(calcSupply(16,102,1.1));