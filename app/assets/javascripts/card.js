//Every time a user mouse enters a card, return that card

//Now we want to:
//Change the background-color
//Change the font-color

var card = (function () {

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
    $(ele).height(maxHeight)
  }

  setMaxheight('.pta-card')
  setMaxheight('.card-link')

})()