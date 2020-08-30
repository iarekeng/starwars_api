$.ajax({
  url: 'https://swapi.dev/api/people',
  type: 'GET'
}).then(
  (data) => {
      $('#card1').html(data.results[0].name);
      $('#card2').html(data.results[9].name);
      $('#card7').html(data.results[3].name);
  },
)

$.get("http://swapi.dev/api/people/?page=2", function(data) {
  $('#card3').html(data.results[0].name);
  $('#card4').html(data.results[8].name);
  $('#card9').html(data.results[9].name);
})

$.get("http://swapi.dev/api/people/?page=4", function(data) {
  $('#card5').html(data.results[0].name);
})
$.get("http://swapi.dev/api/people/?page=5", function(data) {
  $('#card6').html(data.results[9].name);
  $('#card8').html(data.results[2].name);
})

$.get("http://swapi.dev/api/people/?page=7", function(data) {
  $('#card10').html(data.results[5].name);
})
$.get("http://swapi.dev/api/people/?page=8", function(data) {
  $('#card11').html(data.results[7].name);
})
