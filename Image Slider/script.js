const slides = document.querySelectorAll(".slide")

let currSlide = 1
showSlide(currSlide)

function changeSlide(val){
    showSlide(currSlide += val)
}

function showSlide(val){
    if(val > slides.length){currSlide = 1}

    if(val < 1) {currSlide = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"}
    
    slides[currSlide-1].style.display = "block"
}