function replaceSpaces(str) {
    for(var i = 0; i < str.length; i++) {
        str = str.replace(" ","");
    }
    console.log(str);
}

replaceSpaces('But you were living in another world tryin\' to get your message through');