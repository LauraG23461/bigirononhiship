// ==UserScript==
// @name         Big Iron
// @version      0.0.00004
// @author       The Boys
// @include      https://cytu.be/r/dostthoujeer
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/Maxwell23461/bigirononhiship/master/user.js
// @updateURL    https://raw.githubusercontent.com/Maxwell23461/bigirononhiship/master/user.js
// @grant        GM_addStyle
// ==/UserScript==

var $ = window.jQuery;
var timer = setInterval (function() { scriptAutoRefresh(); }, 250);

var ochacoBlurb = new Audio('https://puu.sh/COqBJ/47cc3bbda3.mp3')




//███████████████████ fuu zone ███████████████████

var zNode = document.createElement ('div');
zNode.innerHTML = '<img src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/6/69/Ochaco_School_Uniform_Full_Body.png/revision/latest/scale-to-width-down/153?cb=20160112174417" width="100"></img>';
zNode.setAttribute ('id', 'ochacoU');
document.body.appendChild (zNode);

$("#ochacoU").click(function() {
    ochacoBlurb.play();
    alert("STOP LOOKING AT MY ASS");
});

GM_addStyle ( `
#ochacoU {
        position:               absolute;
        top:                    290px;
        left:                   34px;
}
#ochacoU:hover {
        cursor: pointer;
}
#messagebuffer {
       background-repeat: no-repeat;
       background-position: 93% 103%;
       background-color: black;
       background-size: 40px;
}
`);

//--Auto-updating the page so that it can keep the changes past initial load
function scriptAutoRefresh()
{
    var replaceArry = [
    [/STOP LOOKING AT MY ASS/gi, 'PLEASE LOOK AT MY ASS'],
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
function scriptAutoRefresh()
{
    var replaceArry = [
    [/STOP LOOKING AT MY ASS/gi, 'PLEASE LOOK AT MY ASS'],
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
