(function () {
  var heights = $(".card-block").map(function() {
    return $(this).height();
  }).get(),
  maxHeight = Math.max.apply(null, heights);
  $(".card-block").height(maxHeight);
})()
