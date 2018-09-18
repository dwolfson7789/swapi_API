// target DOMbod
var DOMbod = document.getElementById('DOMbod');
var f = 1;
var req = new XMLHttpRequest();
// url host
var URLhost = 'https://swapi.co/api/people/';
req.open('GET', URLhost, true);
// request
req.addEventListener('load', function() {
  // 200 default
  if (req.status >= 200 && req.status < 400) {
    var response = JSON.parse(req.responseText);
    console.log(response);
    var tableHead = document.createElement('h3');
    DOMbod.appendChild(tableHead);
    tableHead.textContent = 'Star Wars - ' + f;
    var tabletList = document.createElement('ol');
    tableHead.appendChild(tabletList);
