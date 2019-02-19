// ==UserScript==
// @name         Big Iron
// @version      0.0.00005
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


//███████████████████ maxwell zone ███████████████████


GM_addStyle (`
.chat-msg-Maxwell23461::before
{
  //content: url('http://i.imgur.com/x2ir0xH.png') " maxwell23461: ";
  //content: url('http://puu.sh/s5wfj.png') " maxwell23461: ";
  //content: url('http://puu.sh/s7EUQ.png') " maxwell23461: ";
  //content: url('http://puu.sh/s7GIw.jpg') " maxwell23461: ";
  //content: url('http://puu.sh/sWeZF.png') " maxwell23461: ";
  //content: url('http://puu.sh/lGbD2.jpg') " maxwell23461: ";
  //content: url('http://i.imgur.com/1HHCcfG.png') " maxwell23461: ";
  //content: url('http://puu.sh/t2wXH.png') " maxwell23461: ";
  //content: url('http://puu.sh/t5TMA.png') " maxwell23461: ";
  //content: url('http://puu.sh/uVZfF.jpg') " maxwell23461: ";
  //content: url('http://puu.sh/uVZC7.png2') " maxwell23461: ";
  //content: url('http://i.imgur.com/xYaIY6K.png') " maxwell23461: ";
  //content: url('http://i.imgur.com/3pfZe3a.png') " Maxwell: ";
  //content: url('http://i.imgur.com/eufNYUk.png') " Maxwell: ";
  //content: url('http://i.imgur.com/FAaUFPB.png') " Maxwell: ";
  //content: url('http://i.imgur.com/OUhhhgj.png') " Jotaro: ";
  //content: url('https://i.imgur.com/4HjRJV3.png') " Ryuko: ";
  //content: url('https://i.imgur.com/6ioo63T.png') " ";
  //content: url('https://i.imgur.com/rA9MrVB.png') " ";
  //content: url('https://cdn.discordapp.com/attachments/318608900914020352/468083881120104458/eeee.png') " ";
  //content: url('https://cdn.discordapp.com/attachments/318608900914020352/503560993205387264/unknown.png') " ";
  //content: url('https://cdn.discordapp.com/attachments/318608900914020352/529359781442617374/rin_10_small.png') " ";
  //content: url('https://cdn.discordapp.com/attachments/318612662034366466/531639074302328862/mlord.png') " ";
  //content: url('https://cdn.discordapp.com/attachments/318612662034366466/532226630320652299/unknown.png') " ";
  content: url('https://cdn.discordapp.com/attachments/318608900914020352/537421955750690827/unknown.png') " ";
  font-weight: bold;
}
`);























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



.chat-msg-genie::before
{
  content: url('https://puu.sh/CAPrA/881e39701c.jpg')" ";
  font-weight: bold;
}

img {
    max-width: 100%;
    height: auto;
}

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

#userlist {
       background-repeat: no-repeat;
       background-position: 93% 103%;
       background-color: black;
       background-size: 40px;
}

.timestamp
{
    display: none;
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
