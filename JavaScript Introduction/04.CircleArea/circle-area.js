function calcCircleArea(r) {
    var area = r * r * Math.PI;
    return 'r = ' + r + ';' + 'area = ' + area; 
}

var result = calcCircleArea(7) + '\n' + calcCircleArea(1.5) + '\n' + calcCircleArea(20);

document.getElementById("area").innerText = result;