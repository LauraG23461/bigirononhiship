// ==UserScript==
// @name         Big Iron
// @version      0.1
// @author       The Boys
// @include      https://cytu.be/r/dostthoujeer
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/Maxwell23461/bigirononhiship/master/user.js
// @updateURL    https://raw.githubusercontent.com/Maxwell23461/bigirononhiship/master/meta.js
// @grant        none
// ==/UserScript==

var timer = setInterval (function() { scriptAutoRefresh(); }, 250);

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle ( `

`);

//--Auto-updating the page so that it can keep the changes past initial load
function scriptAutoRefresh()
{
    var replaceArry = [
    [/genie/gi, 'ASS EATER2'],

];
var numTerms = replaceArry.length;
var txtWalker = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: function (node) {
            //-- Skip whitespace-only nodes
            if(node.nodeValue.trim())
            {
                return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_SKIP;
        }
    },
    false
);
var txtNode = null;

while (txtNode = txtWalker.nextNode () ) {
    var oldTxt = txtNode.nodeValue;

    for (var J = 0; J < numTerms; J++) {
        oldTxt = oldTxt.replace (replaceArry[J][0], replaceArry[J][1]);
    }
    txtNode.nodeValue = oldTxt;
}


}
