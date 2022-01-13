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

var textoutput = document.getElementById("textoutput");

//  Create Functions//
// 1.lower case-
function lowerFunction(event) {
    event.preventDefault();
    let text = textoutput.value;
    textoutput.value = text.toLowerCase();
}

// 2.UPPER CASE-
function upperFunction(event) {
    event.preventDefault();
    let text = textoutput.value;
    textoutput.value = text.toUpperCase();
}

// 3.Sentence case-
function sentenceFunction(event) {
    event.preventDefault();
    let sentence = textoutput.value;
    textoutput.value = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();

}

// 4.Capitalized Case-
function capitalizedFunction(event) {
    event.preventDefault();
    let capitalized = textoutput.value;
    textoutput.value = capitalized
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 5.aLtErNaTiNg cAsE-
function alternatetextFunction(event) {
    event.preventDefault();
    let chars = textoutput.value;
    chars = chars.toUpperCase().split("");
    for (let i = 0; i < chars.length; i = i + 2) {
        chars[i] = chars[i].toLowerCase();
    }
    textoutput.value = chars.join("");
}

// 6.Title Case-
function titlecaseFunctiion(event) {
    event.preventDefault();
    let title = textoutput.value;
    textoutput.value = title
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 7.InVeRsE CaSe-
function inversecaseFunction(event) {
    event.preventDefault();
    let inverse = textoutput.value;
    textoutput.value = inverse
        .toUpperCase()
        .split(' ')
        .map(word => word.charAt(0).toLowerCase() + word.slice(1))
        .join(' ');
}

// 8.Download text-
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
       element.style.display = 'none';
       document.body.appendChild(element);
       element.click();
       document.body.removeChild(element);
   }

   // Start file download.
   document.getElementById("download").addEventListener("click", function(event){
        // Generate download of convert-case.txt file with some content
        event.preventDefault();
       var text = document.getElementById("textoutput").value;
       var filename = "convert-case.txt";
       download(filename, text);
   }, false);

// 9.Copy to clipboard-

let myTimeout = setTimeout(clipboardFunction,3000);
function clipboardFunction(event) {
    event.preventDefault();
    // let copyText = textoutput.value;
    document.getElementById("textoutput").select();
    document.execCommand("copy");
    document.getElementById("time").innerHTML = "Text Copied to Clipboard!";
    // console.log("hello");

    // console.log(copyText);
}

// 10.Clear text-
function clearFunction(event) {
    event.preventDefault();
    textoutput.value = "";
    document.getElementById("character").innerHTML = "0";
    document.getElementById("word-count").innerHTML = "0";
    document.getElementById("line-count").innerHTML = "0";
}

//Count Functions//
document.getElementById("textoutput").addEventListener("keyup", countFunction);

function countFunction() {
    let count = textoutput.value;
    let wordCount = 0;
    let lineCount = 0;
   
    if (count.length > 0 ) {
        wordCount = count.split(" ").length;
        lineCount = count.split("\n").length;
    }

    document.getElementById("character").innerHTML = count.length;
    // Word count
    document.getElementById("word-count").innerHTML = wordCount;
    // Line-cont
    document.getElementById("line-count").innerHTML = lineCount;
}