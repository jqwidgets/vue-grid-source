function formatAPI() {
    var fc_cmt = "#080";
    var fc_html = "#11a";
    var fc_quot = "#080";
    var fc_kwds = "#11a";

    function formatCode(precode) {
        let textlines = precode.split(/\r|\n/);
        let linecount = 1;
        let newcode = '';
        let keywords = 'debugger|export|function|return|null|for|set|undefined|var|let|document|with|true|false|switch|this|case';
        for (let b = 0; b < textlines.length; b++) {
            let code = textlines[b];
            code = code.replace(/\f|\n/g, '');
            code = code.replace(/(".+")/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_quot + ";\">$1</span>");
            code = code.replace(/('.+')/g, "<span style=\" clear: both; padding: 0px; margin: 0px; color: " + fc_quot + ";\">$1</span>");
            code = code.replace(/&lt;(\S.*?)&gt;/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_html + ";\">&lt;$1&gt;</span>");
            code = code.replace(/&lt;!--/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_cmt + ";\">&lt;!--");
            code = code.replace(/--&gt;/g, "--&gt;</span>");

            code = colourKeywords(keywords, code);
            if (code.indexOf("//") >= 0) {
                code = "<span style=\"clear: both; padding: 0px; margin: 0px; color: #a533d4;\">" + code + "</span>";
            }

            newcode += code + '<div/>';
            newcode = newcode.replace(/"{/g, '\'{');
            newcode = newcode.replace(/}"/g, '}\'');
            newcode = newcode.replace(/"\[/g, '\'[');
            newcode = newcode.replace(/\]"/g, ']\'');
            newcode = newcode.replace(/&amp;quot;/g, '"');
            linecount++;
        }

        return '<code class="code new-code">' + newcode + '</code>';
    }

    function colourKeywords(keywords, codeline) {
        let wordre = new RegExp('(' + keywords + ') ', 'gi');
        return codeline.replace(wordre, '<span class="' + fc_kwds + '">$1 </span>');
    }


    let pres = document.getElementsByTagName('PRE');
    for (let a = 0; a < pres.length; a++) {
        let elem = pres[a];
        if (elem.className.toLowerCase() === 'code') {
            elem.innerHTML = formatCode(elem.innerHTML);
        }
    }
}