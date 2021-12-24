import { allAssetNames } from './assetFileNames.js';

let getVideoPath = function(name, fileName) {

  return `<div class="item"><video controls><source src="assets/doggos/${name}/${fileName}"></video></div>`;

}

let getImgPath = function(name, fileName) {

  return `<div class="item"><img src="assets/doggos/${name}/${fileName}"></div>`;

}

// some sort of Durstenfeld shuffle idk, https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
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

shuffleArray(yaboi)

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
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    },
    autoplay: true,
    autoplayTimeout:1750,
    autoplayHoverPause:true
  });
});
