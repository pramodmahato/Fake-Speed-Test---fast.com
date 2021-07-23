document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', buttonClick ); //Click Event Listener after the DOM is loaded
});
function buttonClick() {
    var min = document.getElementById('minSpeed').value //Minimium Speed Value from User's Input
    var max = document.getElementById('maxSpeed').value //Maximium Speed Value from User's Input
    min = min.length>0 ? min : 130 // If no input from user set the Minimum Speed to 130
    max = max.length>0 ? max : 150 // If no input from user set the Maximum Speed to 150
    chrome.tabs.executeScript({
    code: `var minSpeed=${min}; var maxSpeed=${max};`
}, function() {
    chrome.tabs.executeScript({file: 'btn.js'});
});
}
