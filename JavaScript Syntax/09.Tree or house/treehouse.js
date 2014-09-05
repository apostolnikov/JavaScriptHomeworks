function treeHouseCompare(a, b) {
    var houseArea = a * a + (Math.sqrt(3) / 4) * a * a;
    var treeArea = b * b / 3 + Math.PI * (2 / 3 * b) * (2 / 3 * b);
    
    if (houseArea > treeArea) {
        var result = 'house/' + houseArea.toFixed(2);
    } else {
        var result = 'tree/' + treeArea.toFixed(2);
        
    }
    console.log(result);
}


treeHouseCompare(3,2);
treeHouseCompare(3,3);
treeHouseCompare(4,5);