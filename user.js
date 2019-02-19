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
    [/genie/gi, 'ASS EATER!!!!!!!'],

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
