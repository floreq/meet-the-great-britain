let canvas = document.getElementById('hero-image');
let ctx = canvas.getContext('2d');

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;
  let numImages = 0;

  for (let src in sources) {
    numImages++;
  }
  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}

let sources = {
  stonehenge : "images/stonehenge.svg",
  sun : "images/sun.svg",
  cloudBig : "images/cloud-1.svg",
  cloudSmall : "images/cloud-2.svg",
  balloon : "images/hot-air-balloon.svg"
}

loadImages(sources, function(images) {
  ctx.drawImage(images.stonehenge, (canvas.width / 2) - (images.stonehenge.width / 2) , canvas.height - images.stonehenge.height);
  ctx.drawImage(images.sun, 130, 0);
  ctx.drawImage(images.cloudSmall, 0, 240);
  ctx.drawImage(images.cloudBig, 160, 100);
  ctx.drawImage(images.cloudSmall, 360, 200);
  ctx.drawImage(images.cloudBig, 500, 220);
  ctx.drawImage(images.cloudBig, (canvas.width - images.cloudBig.width), 30);
});
