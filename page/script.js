// Get the modals
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');

// Get the buttons that open the modals
const openModal1 = document.getElementById('openModal1');
const openModal2 = document.getElementById('openModal2');

// Get the <span> elements that close the modals
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');

// When the user clicks the button, open the first modal
openModal1.onclick = function() {
    modal1.style.display = 'block';
}

// When the user clicks on <span> (x), close the first modal
closeModal1.onclick = function() {
    modal1.style.display = 'none';
}

// When the user clicks the button in the first modal, open the second modal and close the first
openModal2.onclick = function() {
    modal1.style.display = 'none';
    modal2.style.display = 'block';
}

// When the user clicks on <span> (x), close the second modal
closeModal2.onclick = function() {
    modal2.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
    if (event.target == modal2) {
        modal2.style.display = 'none';
    }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slides every 2 seconds
setInterval(nextSlide, 2000);












// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// // Show the first slide initially
// showSlide(currentSlide);

// // Change slides every 2 seconds
// setInterval(nextSlide, 2000);
