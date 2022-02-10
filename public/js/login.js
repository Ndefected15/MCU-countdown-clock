// SIDEBAR
const sidetext = document.querySelectorAll(".side-text")

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector(".sidebar").style.width = "200px";
    document.querySelector(".menu").style.display = "none";
    sidetext.forEach(sidetext => sidetext.style.display = "block");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.querySelector(".sidebar").style.width = "50px";
    sidetext.forEach(sidetext => sidetext.style.display = "none");
    document.querySelector(".menu").style.display = "block";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})