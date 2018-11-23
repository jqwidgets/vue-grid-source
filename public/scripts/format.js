
//Colour constants
var fc_cmt = "#080";
var fc_html = "#11a";
var fc_quot = "#080";
var fc_kwds = "#11a";

//Language keywords
var fc_java_kwds = "public|int|float|double|private|new|void|synchronized|if|for|byte|break|else";

var pres = document.getElementsByTagName("pre");
for (var a = 0; a < pres.length; a++) {
    var elem = pres[a];
    if (elem.className.toLowerCase() == 'code') formatCode(elem);
}

function formatCode(precode) {
    var textlines = precode.split(/\r|\n/);
    var linecount = 1;
    var newcode = "";
    var keywords = "debugger|export|import|function|return|null|for|set|undefined|var|with|true|false|switch|this|case|let|const";
    for (var b = 0; b < textlines.length; b++) {
        var code = textlines[b];
        code = code.replace(/\f|\n/g, "");
        code = code.replace(/(".+")/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_quot + ";\">$1</span>");
        code = code.replace(/('.+')/g, "<span style=\" clear: both; padding: 0px; margin: 0px; color: " + fc_quot + ";\">$1</span>");
        code = code.replace(/&lt;(\S.*?)&gt;/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_html + ";\">&lt;$1&gt;</span>");
        code = code.replace(/&lt;!--/g, "<span style=\"clear: both; padding: 0px; margin: 0px; color: " + fc_cmt + ";\">&lt;!--");
        code = code.replace(/--&gt;/g, "--&gt;</span>");        

        code = colourKeywords(keywords, code);
        code = colourCodeKeywordsCustom("theme:|minwidth:|width:|disabled:|height:|uploadUrl:|datafield:|dataField:|text:|cellsformat:|cellsalign:|cellsformat:|columntype:|columngroup:|cellsrenderer:|align:|name:| type:|map:", code);
        code = colourKeywordsCustom("JqxButton|JqxGrid|JqxTabs", code);
        if (code.indexOf("//") >= 0) {
            code = "<span style=\"clear: both; padding: 0px; margin: 0px; color: #a533d4;\">" + code + "</span>";
        }

        var formatline = ("   " + linecount).slice(-3);
        newcode += code + "<div/>";
        linecount++;
    }
    return newcode;
}

var colourKeywordsCustom = function (keywords, codeline) {
    var words = keywords.split("|");
    var newString = codeline;
    for (var i = 0; i < words.length; i++) {
        if (newString.indexOf(words[i] + "(") >= 0) {
            newString = newString.replace(words[i] + "(", "<span style=\"color: #666b74;\">" + words[i] + "</span>(");
        }
    }
    return newString;
}

var colourCodeKeywordsCustom = function (keywords, codeline) {
    var words = keywords.split("|");
    var newString = codeline;
    for (var i = 0; i < words.length; i++) {
        if (newString.indexOf(words[i]) >= 0) {
            newString = newString.replace(words[i] + "", "<span style=\"color: #666b74;\">" + words[i] + "</span>");
        }
    }
    return newString;
}

function colourKeywords(keywords, codeline) {
    var wordre = new RegExp("(" + keywords + ") ", "gi");
    return codeline.replace(wordre, "<span style=\"color: " + fc_kwds + ";\">$1 </span>");
}
  