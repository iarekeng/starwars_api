
$(() => {



$.ajax({
  url: 'https://swapi.dev/api/people',
  type: 'GET'
}).then(
  (data) => {
      $('#card1').html(data.results[0].name);
      $('#card1').on('click', openModal)
      $('#hair-color').text('hair color: ' + data.results[0].hair_color)
      $('#eye-color').text('eye color: ' + data.results[0].eye_color)
      $('#height').text('height: ' + data.results[0].height)
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




const $modal = $('#modal')
const $closeModal = $('#close')

const openModal = () => {
  $modal.css('display', 'block')
  $('#card-name').text($(event.currentTarget).text())
}

const closeModal = () => {
  $modal.css('display', 'none')
}

window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

// $('.card').on('click', openModal)
$closeModal.on('click', closeModal)
})
