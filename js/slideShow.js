var slides = document.querySelectorAll("#slides > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var cur = 0;

function showSlides(n){
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
}

function prevSlide(){
    if(cur > 0) cur--;
    else cur = slides.length - 1;

    showSlides(cur);
}

function nextSlide(){
    if(cur < slides.length - 1) cur++;
    else cur = 0;

    showSlides(cur);
}

showSlides(cur);
prev.onclick = prevSlide;
next.onclick = nextSlide;