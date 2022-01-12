//  addEventlistener method to call the function//
document.getElementById("lower").addEventListener("click", lowerFunction);
document.getElementById("upper").addEventListener("click", upperFunction);
document.getElementById("sentence").addEventListener("click", sentenceFunction);
document.getElementById("capitalized").addEventListener("click", capitalizedFunction);
document.getElementById("alternating").addEventListener("click", alternatetextFunction);
document.getElementById("title").addEventListener("click", titlecaseFunctiion);
document.getElementById("inverse").addEventListener("click", inversecaseFunction);
document.getElementById("clipboard").addEventListener("click", clipboardFunction);
document.getElementById("clear").addEventListener("click", clearFunction);

//  Create Functions//
function lowerFunction(event) {
    event.preventDefault();
    let text = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = text.toLowerCase();
}

function upperFunction(event) {
    event.preventDefault();
    let text = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = text.toUpperCase();
}

function sentenceFunction(event) {
    event.preventDefault();
    let sentence = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();

}

function capitalizedFunction(event) {
    event.preventDefault();
    let capitalized = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = capitalized
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

}

function alternatetextFunction(event) {
    event.preventDefault();
    let chars = document.getElementById("textoutput").value;
    chars = chars.toUpperCase().split("");
    for (let i = 0; i < chars.length; i = i + 2) {
        chars[i] = chars[i].toLowerCase();
    }
    document.getElementById("textoutput").value = chars.join("");
}

function titlecaseFunctiion(event) {
    event.preventDefault();
    let title = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = title
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function inversecaseFunction(event) {
    event.preventDefault();
    let inverse = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = inverse
        .toUpperCase()
        .split(' ')
        .map(word => word.charAt(0).toLowerCase() + word.slice(1))
        .join(' ');
}

function clipboardFunction(event) {
    event.preventDefault();
    let copyText = document.getElementById("textoutput").value;
    document.getElementById("textoutput").select();
    document.execCommand("copy");

    console.log(copyText);
}

function clearFunction(event) {
    event.preventDefault();
    document.getElementById("textoutput").value = " ";
}

// Creating Count Functions//
document.getElementById("textoutput").addEventListener("keyup", countFunction);
document.getElementById("textoutput").addEventListener("keyup", wordcountFunction);
document.getElementById("textoutput").addEventListener("keyup", linecountFunction);

function countFunction() {
    let count = document.getElementById("textoutput").value;
    document.getElementById("character").innerHTML = count.length;

}

function wordcountFunction() {
    let word = document.getElementById("textoutput").value;
    document.getElementById("word-count").innerHTML = word.split(" ").length;
}

function linecountFunction() {
    let word = document.getElementById("textoutput").value;
    document.getElementById("line-count").innerHTML = word.split("\n").length;
}