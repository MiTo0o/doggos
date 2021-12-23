import { allAssetNames } from './assetFileNames.js';
console.log(allAssetNames);

$(function() {
  




  var containerHeight = $(".owl-carousel").height();
  $(".owl-carousel").find("img").each(function(index, img) {
    var w = $(img).prop('naturalWidth');
    var h = $(img).prop('naturalHeight');
    $(img).css({
      'width': Math.round(containerHeight * w / h) + 'px',
      'height': containerHeight + 'px'
    });
  })
  $(".owl-carousel").find("video").each(function(index, video) {
    var w = $(video).prop('naturalWidth');
    var h = $(video).prop('naturalHeight');
    $(video).css({
      'width': Math.round(containerHeight * w / h) + 'px',
      'height': containerHeight + 'px'
    });
  })
  $(".owl-carousel").owlCarousel({
    autoWidth: true,
    margin: 10,
    items: 3,
    loop: true,
    nav: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
  });
});
