let mybutton = document.getElementById("back-header");
let isScrolling;

window.onscroll = function() {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 5) {
      
            if (mybutton.classList.contains("slide-in")) {
                mybutton.classList.remove("slide-in");
                mybutton.classList.add("slide-out");
                mybutton.style.opacity = "0"; 
                setTimeout(() => {
                    mybutton.style.display = "none"; 
                }, 500); 
            }
        } else {
       
            if (mybutton.classList.contains("slide-out")) {
                mybutton.classList.remove("slide-out");
                mybutton.classList.add("slide-in");
                mybutton.style.display = "block"; 
                mybutton.style.opacity = "1"; 
            }
        }
    }, 100); 
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// sidebar
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-sidebar');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-open');
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('sidebar-open');
    });
});