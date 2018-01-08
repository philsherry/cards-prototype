var card = (function () {
  $('.card-block').on('click', function() {
    location.href = $(this).find('a').attr('href')
  })
})()
