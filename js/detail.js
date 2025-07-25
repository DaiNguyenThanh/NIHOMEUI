// document.addEventListener('DOMContentLoaded', function () {
//     let gallery=document.querySelector('#galleryPicture');
//     let gallerypicturemodal=new bootstrap.Modal(document.getElementById("GalleryPictureModal"));
//     gallery.addEventListener('click',function(event){
//         event.preventDefault()
//         if (event.target.closest('.carousel-control-prev') || event.target.closest('.carousel-control-next') || event.target.closest(".carousel-indicators")) {
//             return;
//         }
//         gallerypicturemodal.show()
//     })

//     // show modal preview product when click product
//     let products = document.querySelectorAll('.product-item');
//     var modal = new bootstrap.Modal(document.getElementById("PreviewProductModal"));
//     products.forEach(function (p) {
//         p.addEventListener("click", function (event) {
//             if (event.target.closest('.carousel-control-prev') || event.target.closest('.carousel-control-next') || event.target.closest(".carousel-indicators")) {
//                 return;
//             }
//             modal.show()
//         })

//     })
//     // end

//     // scroll custom-carousel-indicators-preview-image when carousel run
//     var carousel = document.querySelector('#carouselExampleIndicators4');
//     var indicators = document.querySelectorAll('.custom-carousel-indicators-preview-image button');
//     var indicatorContainer = document.querySelector('.custom-carousel-indicators-preview-image');

//     carousel.addEventListener('slide.bs.carousel', function (event) {
//         var activeIndex = event.to; // Get the index of the active item
//         // Update active class for indicators
//         indicators.forEach(function (indicator, index) {
//             if (index === activeIndex) {
//                 indicator.classList.add('active');
//             } else {
//                 indicator.classList.remove('active');
//             }
//         });

//         // Scroll the indicator into view
//         var activeIndicator = indicators[activeIndex];
//         var offsetLeft = activeIndicator.offsetLeft;
//         var indicatorWidth = activeIndicator.offsetWidth;
//         var containerWidth = indicatorContainer.offsetWidth;
//         var scrollPosition = offsetLeft - (containerWidth / 2) -12 -  indicatorWidth/4;
//         indicatorContainer.scrollTo({
//             left: scrollPosition,
//             behavior: 'smooth'
//         });
//     });

// });


// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header-menu');
//     if (header) {
//         header.classList.toggle('hidden-header-menu', window.scrollY > 100);
//     }
// });



document.addEventListener('DOMContentLoaded', function () {
    // Popup filter customer box
    const title = document.querySelector('.filter-customer-box__title-wrapper');
    const popup = document.getElementById('popup');
    const applyButton = document.querySelector('.apply-button');
    if (title && popup && applyButton) {
        function togglePopup() {
            if (popup.style.display === 'none' || popup.style.display === '') {
                const titleRect = title.getBoundingClientRect();
                popup.style.top = `${window.scrollY + titleRect.bottom}px`;
                popup.style.left = `${window.scrollX + titleRect.left}px`;
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        }
        title.addEventListener('click', togglePopup);
        applyButton.addEventListener('click', togglePopup);
    }

    // Collapse content for mobile
    const content = document.getElementById('collapseContent');
    if (content && window.innerWidth <= 768) {
        content.style.display = 'none';
    }

    // Password show/hide toggle
    const passwordInput = document.getElementById('exampleInputPassword1');
    const passwordToggle = document.getElementById('passwordToggle');
    if (passwordInput && passwordToggle) {
        const eyeIcon = passwordToggle.querySelector('i');
        passwordToggle.addEventListener('click', function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    }

    // Modal logic
    const modals = [
        document.getElementById('myModal'),
        document.getElementById('signUpModal'),
        document.getElementById('modal2')
    ].filter(Boolean);

    const showModalBtn = document.getElementById('showModal');
    if (showModalBtn && modals[0]) {
        showModalBtn.addEventListener('click', function () {
            modals[0].style.display = 'block';
        });
    }

    const showModal2Btn = document.getElementById('showModal2');
    if (showModal2Btn && modals[0] && modals[1]) {
        showModal2Btn.addEventListener('click', function () {
            modals[0].style.display = 'none';
            modals[1].style.display = 'block';
        });
    }

    const openModal2 = document.getElementById('openModal2');
    if (openModal2 && modals[0] && modals[2]) {
        openModal2.addEventListener('click', function () {
            modals[0].style.display = 'none';
            modals[2].style.display = 'block';
        });
    }

    // Close modal buttons
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close') ||
                         modal.querySelector('#closeModal1') ||
                         modal.querySelector('#closeModal2');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                modal.style.display = 'none';
            });
        }
    });

    // Scrollable wrapper (if exists)
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    const scrollWrapper = document.querySelector('.scroll-wrapper');
    if (scrollLeft && scrollWrapper) {
        scrollLeft.addEventListener('click', () => {
            scrollWrapper.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
    if (scrollRight && scrollWrapper) {
        scrollRight.addEventListener('click', () => {
            scrollWrapper.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});

// Click outside modal to close
window.onclick = function (event) {
    const modals = [
        document.getElementById('myModal'),
        document.getElementById('signUpModal'),
        document.getElementById('modal2')
    ].filter(Boolean);
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};