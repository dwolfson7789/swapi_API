// target DOM
var DOMbod = document.getElementById('DOMbod');
  var req = new XMLHttpRequest();
  var URLhost = 'https://swapi.co/api/people/';
  req.open('GET', URLhost, true);
  req.addEventListener('load', function() {
    if (req.status >= 200 && req.status < 400) {
// call 1
      var response = JSON.parse(req.responseText);
      console.log(response);
      var tableHead = document.createElement('div');
      DOMbod.appendChild(tableHead);
// create ul push films to li
      var tabletList = document.createElement('ul');
      tableHead.appendChild(tabletList);
  // append list
      for (var k = 0; k < response.results.length; k++) {
        // 0 = 10 length of array
        (function(y) {
          // if character is in film
          var filmIn = document.createElement('div')
          filmIn.setAttribute("id", "parent");
          filmIn.textContent = response.results[y].name;



          if (response.results[y].films.length > 0) {


            var movieHead = document.createElement('section');
            filmIn.appendChild(movieHead);
            var movieList = document.createElement('ul');
            movieHead.appendChild(movieList);
            // var person = document.createElement('h3');
            // DOMbod.appendChild(person);
            // person.textContent = response.results[y].name;
            for (var e = 0; e < response.results[y].films.length; e++) {
              (function(x) {
                var newURLhost = response.results[y].films[x];
                var newReq = new XMLHttpRequest();
                newReq.open('GET', newURLhost, true);
                newReq.addEventListener('load', function(){
                  if(newReq.status >= 200 && newReq.status < 400){
                    var newResponse = JSON.parse(newReq.responseText);
                    var movie = document.createElement('li');
                    movie.textContent = newResponse.title;
                    movieList.appendChild(movie);
                  } else {
                    console.log("Error in network request: " + newReq.statusText);
                  }});
                newReq.send(null);
              })(e);
            }
          }
          tabletList.appendChild(filmIn);
        })(k);
      }
    }
  });
  req.send();
