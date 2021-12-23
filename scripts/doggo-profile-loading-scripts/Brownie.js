import { allAssetNames } from '../assetFileNames.js';
const doggoName = 'Brownie'; 

let getVideoPath = function(name, fileName) {

  return `<div class="item" style="width:100%"><video controls><source src="assets/doggos/${name}/${fileName}"></video></div>`;

}

let getImgPath = function(name, fileName) {

  return `<div class="item" style="width:100%"><img src="assets/doggos/${name}/${fileName}"></div>`;

}

let splitArray = function(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

let yaboi = []
for (const dog of Object.keys(allAssetNames)) {
  if (dog === doggoName) {
    for (const key of Object.keys(allAssetNames[dog])) {
      for (let i = 0; i < allAssetNames[dog][key].length; i++) {
        if (key === "imgs") {
          yaboi.push(getImgPath(dog, allAssetNames[dog][key][i]));
        } else {
          yaboi.push(getVideoPath(dog, allAssetNames[dog][key][i]));
        }
      }
    }
    break;
  }
}

let split = splitArray(yaboi, 4);
console.log(split)
for (let i = 1; i < split.length + 1; i++) {
  console.log(i)
  for (let j = 0; j < split[i - 1].length; j++) {
    $("#col" + i).append(split[i - 1][j]);
  }
}


$(function() {


});
