
function isFirtLetterUpperCase(str) {
    let regexp = /^[A-Z]/;
    console.log(str);
    if (regexp.exec(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }

}
isFirtLetterUpperCase('Hello');