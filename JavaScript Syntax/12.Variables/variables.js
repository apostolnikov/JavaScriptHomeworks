function varTypes(values) {
    var name = values[0];
    var age = values[1];
    var isMale = values[2];
    var food = new Array(); // array for food on values[3]

    for (i = 3; i <= values.length - 1; i++) { // iterate food (3 to last position), filling food array
        food[i - 3] = values[i];
    }

    return "My name: " + name + " //type is " + typeof (name) +
        "\nMy age: " + age + " //type is " + typeof (age) +
        "\nI am male: " + isMale + " //type is " + typeof (isMale) +
        "\nMy favourite foods are: " + food + " //type is " + typeof (food);
}

console.log(varTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));