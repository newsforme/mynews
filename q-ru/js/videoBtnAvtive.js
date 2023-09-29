var videoBtnActive = document.querySelector(".play-btn-wrap");
var modalPromo = document.querySelector(".modal-promo");
var closeButton = document.querySelector(".close-btn");
var myPlayer = videojs('video');

videoBtnActive.addEventListener("click", function(){
    modalPromo.style.display = 'block';

});

closeButton.addEventListener("click", function(){
    myPlayer.pause();
    modalPromo.style.display = 'none';
});

