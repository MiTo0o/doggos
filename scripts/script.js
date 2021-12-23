import { allAssetNames } from './assetFileNames.js';

let getVideoPath = function(name, fileName) {

  return `<div><video controls><source src="assets/doggos/${name}/${fileName}"></video></div>`;

}

let getImgPath = function(name, fileName) {

  return `<div class="item"><img src="assets/doggos/${name}/${fileName}"></div>`;

}

let yaboi = []
for (const dog of Object.keys(allAssetNames)) {
  for (const key of Object.keys(allAssetNames[dog])) {
    for (let i = 0; i < allAssetNames[dog][key].length; i++) {
      if (key === "imgs") {
        yaboi.push(getImgPath(dog, allAssetNames[dog][key][i]))
      } else {
        yaboi.push(getVideoPath(dog, allAssetNames[dog][key][i]))
      }
    }
  }
}

// randomize array before appending would prob be good
for (let i = 0; i < yaboi.length; i++) {
  $("#main-slider").append(yaboi[i]);
}

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
