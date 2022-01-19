(function () {

    var textoutput = document.getElementById("textoutput");

    //  Create Functions//
    // 1.lower case-
    document.getElementById("lower").addEventListener("click", function lowerCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text.toLowerCase();
    });

    // 2.UPPER CASE-
    document.getElementById("upper").addEventListener("click", function upperCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text.toUpperCase();
    });

    // 3.Sentence case-
    document.getElementById("sentence").addEventListener("click", function sentenceCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text[0].toUpperCase() + text.slice(1).toLowerCase();
    });

    // 4.Capitalized Case-
    document.getElementById("capitalized").addEventListener("click", function capitalizedCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });

    // 5.aLtErNaTiNg cAsE-
    document.getElementById("alternating").addEventListener("click", function alternatingCase(event) {
        event.preventDefault();
        let chars = textoutput.value;
        chars = chars.toUpperCase().split("");
        for (let i = 0; i < chars.length; i = i + 2) {
            chars[i] = chars[i].toLowerCase();
        }
        textoutput.value = chars.join("");
    });

    // 6.Title Case-
    document.getElementById("title").addEventListener("click", function titleCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });

    // 7.InVeRsE CaSe-
    document.getElementById("inverse").addEventListener("click", function inverseCase(event) {
        event.preventDefault();
        let text = textoutput.value;
        textoutput.value = text
            .toUpperCase()
            .split(' ')
            .map(word => word.charAt(0).toLowerCase() + word.slice(1))
            .join(' ');
    });

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

    document.getElementById("download").addEventListener("click", function downloadCase(event) {
        event.preventDefault();
        var text = textoutput.value;
        var filename = "convert-case.txt";
        download(filename, text);
    });

    // 9.Copy to clipboard-
    document.getElementById("clipboard").addEventListener("click", function titleCase(event) {
        event.preventDefault();
        textoutput.select();
        document.execCommand("copy");
        document.getElementById("clipboard-msg").innerHTML = "Text Copied to Clipboard!";
        setTimeout(function () {
            document.getElementById("clipboard-msg").innerHTML = "";
        }, 3000);
    });

    // 10.Clear text-
    document.getElementById("clear").addEventListener("click", function clear(event) {
        event.preventDefault();
        textoutput.value = "";
        document.getElementById("character").innerHTML = "0";
        document.getElementById("word-count").innerHTML = "0";
        document.getElementById("line-count").innerHTML = "0";
    });

    //Count Functions//

    document.getElementById("textoutput").addEventListener("input", function count() {
        let count = textoutput.value;
        let wordCount = 0;
        let lineCount = 0;
        if (count.length > 0) {
            wordCount = count.split(' ').filter(a => a.trim().length > 0).length;
            // console.log(wordCount);
            lineCount = count.split("\n").length;
        }

        document.getElementById("character").innerHTML = count.length;
        // Word count
        document.getElementById("word-count").innerHTML = wordCount;
        // Line-cont
        document.getElementById("line-count").innerHTML = lineCount;
    });
})();