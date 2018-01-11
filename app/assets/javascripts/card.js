
var card = (function () {
  // Capture when a user clicks
  $('.card-body').on('click', function () {
    var url = $(this).find('a').attr('href')
    if (url !== undefined) {
      window.location.href = url
    }
  })

  // Find the max-height for all cards
  // Get collection of all cards
  function setMaxheight (ele) {
    var height = []

    $(ele).each(function () {
      height.push($(this).height())
    })

    var maxHeight = height.sort(function (a, b) { return b - a })[0]
    $(ele).height(maxHeight)
  }

  function resetHeight (ele) {
    $(ele).height('')
  }

  // We only want to set the height for tablets and higher.
  checkSize()
  // run test on resize of the window
  $(window).resize(checkSize)
  function checkSize () {
    // remove any sizes
    resetHeight('.card')
    resetHeight('.card-body')
    if (navigator.appVersion.indexOf('MSIE 10') === -1) {
      console.log('not ie')
      if ($('.card').css('flex-basis') !== '100%') {
        setMaxheight('.card')
        setMaxheight('.card-body')
      }
    }
  }

  // resetHeight('.card')
  // resetHeight('.card-body')
  // Check each card. If the card does not contain a .card-action
  // make .card-body full height
  function fullHeight () {
    var cardEle = $('.card').not(':has(.card-action)')
    cardEle.each(function () {
      var height = cardEle.height()
      var paddingTop = $(this).children('.card-body').css('padding-top').replace('px', '')
      var paddingBottom = $(this).children('.card-body').css('padding-bottom').replace('px', '')
      var totalHeight = height - paddingTop - paddingBottom
      $(this).children('.card-body').height(totalHeight)
    })
  }

  fullHeight()
})()

var doc = document.documentElement
doc.setAttribute('data-useragent', navigator.userAgent)
