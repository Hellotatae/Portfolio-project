const progressEl = document.querySelector('.progress');
const scrollButton = document.querySelector(".scrollup");


window.onscroll = function() {
    scrollProgress();
    scrollFunction();
};
// scroll progress

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / pageHeight) * 100;
    progressEl.style.visibility = "visible";
    progressEl.style.width = scrollPercentage + "%";
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

//scroll to top

function scrollToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

scrollButton.addEventListener("click", scrollToTop);

// profile swap

function opentab(event, tabname) {
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
}

for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}


// slide show for certificate section

document.addEventListener("DOMContentLoaded", function() {
const slides = document.querySelectorAll(".card-cer");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


document.querySelector(".next-btn").addEventListener("click", nextSlide);


document.querySelector(".prev-btn").addEventListener("click", prevSlide);
});

