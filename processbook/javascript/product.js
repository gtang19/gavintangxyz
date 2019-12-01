//Image viewer
var close = document.querySelector(".image-popup .close");
var popup = document.querySelector(".image-popup");
var images = document.querySelectorAll(".item-image img");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
close.addEventListener("click", function(){
  popup.setAttribute('style',"display: none;")
});
images.forEach(image => {
  image.addEventListener("click", function(){
    popup.setAttribute('style',"display: block;")
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  });
});

