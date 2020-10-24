var time = 5000;//ms



var imgidx = 0;
var imgtoggle = false;


var images = [
    "slideimages/pic1.jpg",
    "slideimages/pic2.jpg",
    "slideimages/pic3.jpg",
    "slideimages/pic4.jpg",
    "slideimages/pic5.jpg",
    "slideimages/pic6.jpg",
    "slideimages/pic7.jpg",
];


function previousImage() {
    imgtoggle = !imgtoggle;
  
    imgidx = (imgidx - 1) % images.length;
    
    if(imgidx < 0) imgidx=images.length-1;
  
    if (imgtoggle)
      document.getElementById('img2').src = images[imgidx];
    else
      document.getElementById('img1').src = images[imgidx];
}

function nextImage() {
  imgtoggle = !imgtoggle;

  imgidx = (imgidx + 1) % images.length;

  if (imgtoggle)
    document.getElementById('img2').src = images[imgidx];
  else
    document.getElementById('img1').src = images[imgidx];
}


function fadeImage() {
  if (imgtoggle)
    document.getElementById('img2').style.opacity = '1.0';
  else
    document.getElementById('img2').style.opacity = '0.0';
}

var i = 0;
var id;

 loadbar = function() {
    if (i == 0) {
    var elem = document.getElementById("loadbar");
    var width = 1;
    id = setInterval(frame, time/100);
    i = 1;


    function frame() {
        if (width >= 100) {
            clearInterval(id);
            nextImage();
            fadeImage();
            elem.style.width = "0%";
            setTimeout(() => {
                loadbar();
            }, 1000);
            i = 0;

      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  } 
}


fowards = function(){
    var elem = document.getElementById("loadbar");
    clearInterval(id);
    nextImage();
    fadeImage();
    elem.style.width = "0%";
    setTimeout(() => {
        loadbar();
    }, 1000);
    i = 0;
}


backwards = function(){
    var elem = document.getElementById("loadbar");
    clearInterval(id);
    previousImage();
    fadeImage();
    elem.style.width = "0%";
    setTimeout(() => {
        loadbar();
    }, 1000);
    i = 0; 
}




loadbar();








