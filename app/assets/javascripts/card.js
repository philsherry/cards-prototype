
var card = (function () {

  //Add active class to PTA card for interaction
  $('.pta-card').addClass('js')
  //Capture when a user clicks
  $('.card-link').on('click', function() {
    var url = $(this).find('a').attr('href')
    if(url !== undefined) {
      window.location.href = url
    }
    
  })

  //Find the max-height for all cards
  //Get collection of all cards
  function setMaxheight(ele){
    var height = []

    $(ele).each(function(){
      height.push($(this).height())
    })

    var maxHeight = height.sort(function(a, b){return b-a})[0]
    //console.log(maxHeight)
    $(ele).height(maxHeight)
  }

  function resetHeight(ele) {
    $(ele).height('')
  }

  //We only want to set the height for tablets and higher.
  checkSize()
  // run test on resize of the window
  $(window).resize(checkSize);
  function checkSize(){
    //remove any sizes
    resetHeight('.pta-card')
    resetHeight('.card-link')
    //flex-basis: 100%;
    //if($('.column-one-third').css('float') == 'left') {
    if($('.pta-card').css('flex-basis') != '100%') {
      setMaxheight('.pta-card')
      setMaxheight('.card-link')
    }
  }
  //resetHeight('.pta-card')
  //resetHeight('.card-link')
  
  //Check each card. If the card does not contain a .card-action
  //make .card-link full height
  //$(window).resize(fullHeight);
  function fullHeight() {
    var cardEle = $('.pta-card').not(':has(.card-action)')
    cardEle.each(function() {
      var height = cardEle.height()
      var paddingTop = $(this).children('.card-link').css('padding-top').replace("px", "")
      var paddingBottom = $(this).children('.card-link').css('padding-bottom').replace("px", "")
      var totalHeight = height - paddingTop - paddingBottom
      $(this).children('.card-link').height(totalHeight)
    })

  }

  fullHeight()

})()