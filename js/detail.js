document.addEventListener('DOMContentLoaded', function () {
    let gallery=document.querySelector('#galleryPicture');
    let gallerypicturemodal=new bootstrap.Modal(document.getElementById("GalleryPictureModal"));
    gallery.addEventListener('click',function(event){
        event.preventDefault()
        if (event.target.closest('.carousel-control-prev') || event.target.closest('.carousel-control-next') || event.target.closest(".carousel-indicators")) {
            return;
        }
        gallerypicturemodal.show()
    })

    // show modal preview product when click product
    let products = document.querySelectorAll('.product-item');
    var modal = new bootstrap.Modal(document.getElementById("PreviewProductModal"));
    products.forEach(function (p) {
        p.addEventListener("click", function (event) {
            if (event.target.closest('.carousel-control-prev') || event.target.closest('.carousel-control-next') || event.target.closest(".carousel-indicators")) {
                return;
            }
            modal.show()
        })

    })
    // end

    // scroll custom-carousel-indicators-preview-image when carousel run
    var carousel = document.querySelector('#carouselExampleIndicators4');
    var indicators = document.querySelectorAll('.custom-carousel-indicators-preview-image button');
    var indicatorContainer = document.querySelector('.custom-carousel-indicators-preview-image');

    carousel.addEventListener('slide.bs.carousel', function (event) {
        var activeIndex = event.to; // Get the index of the active item
        // Update active class for indicators
        indicators.forEach(function (indicator, index) {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Scroll the indicator into view
        var activeIndicator = indicators[activeIndex];
        var offsetLeft = activeIndicator.offsetLeft;
        var indicatorWidth = activeIndicator.offsetWidth;
        var containerWidth = indicatorContainer.offsetWidth;
        var scrollPosition = offsetLeft - (containerWidth / 2) -12 -  indicatorWidth/4;
        indicatorContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

});