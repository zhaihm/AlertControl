
var disablerFunction = function () {
    window.alert = function alert(msg) {
        console.log('Hidden Alert: ' + msg);
    };
};

var disablerCode = "(" + disablerFunction.toString() + ")();";
var disablerScriptElement = document.createElement('script');
disablerScriptElement.textContent = disablerCode;

document.documentElement.appendChild(disablerScriptElement);
disablerScriptElement.parentNode.removeChild(disablerScriptElement);
