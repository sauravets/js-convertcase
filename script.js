
document.getElementById("lower").addEventListener("click", lowerFunction);

function lowerFunction(event) {
    event.preventDefault();
    let text = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = text.toLowerCase();
}

document.getElementById("upper").addEventListener("click", upperFunction);

function upperFunction(event) {
    event.preventDefault();
    let text = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = text.toUpperCase();
}

document.getElementById("sentence").addEventListener("click", sentenceFunction);

function sentenceFunction(event) {
    event.preventDefault();
    let sentence = document.getElementById("textoutput").value;
    document.getElementById("textoutput").value = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();

}

document.getElementById("capitalized").addEventListener("click", capitalizedFunction);

function capitalizedFunction(event) {
    event.preventDefault();
    let capitalized = document.getElementById("textoutput").value;
    // document.getElementById("textoutput").value = capitalized[0].toUpperCase() + capitalized.slice(1);
    // console.log(capitalized);
    let words;
    words = capitalized.split("");
    // for(let i=0; i<capitalized.length; i++)
    words = words[0].toUpperCase() + words.slice(1);
    console.log(words);
    document.getElementById("textoutput").value = words.join("");

}


document.getElementById("alternating").addEventListener("click", alternatetextFunction);
function alternatetextFunction(event) {
    event.preventDefault();
    let chars = document.getElementById("textoutput").value;
    chars = chars.toUpperCase().split("");
    for (let i = 0; i < chars.length; i = i + 2) {
        chars[i] = chars[i].toLowerCase();
    }
    document.getElementById("textoutput").value = chars.join("");
}

