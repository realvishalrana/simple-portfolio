function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;

  if (el.dataset.image) {
    imageToLoad - el.dataset.image;
    // console.log("1st " + imageToLoad);
  } else if (typeof el.currentSrc === undefined) {
    imageToLoad = el.src;
    // console.log("2nd " + imageToLoad);
  } else {
    imageToLoad = el.currentSrc;
    // console.log("3rd " + imageToLoad);
  }
  console.log(imageToLoad);
  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadImage("wallpaper"); 
  loadImage("pictureImage", "picture");
});
