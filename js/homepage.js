
document.addEventListener('DOMContentLoaded', function () {

    const image = document.getElementById('brandImage');
    const note = document.getElementById('brandNote');
    if (image && note) {
        image.addEventListener('click', function () {
            note.style.display = note.style.display === 'none' || note.style.display === '' ? 'block' : 'none';
        });
    }


    const tabButtons = document.querySelectorAll('.MuiTab-root');
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            tabButtons.forEach(btn => btn.classList.remove('Mui-selected'));
            this.classList.add('Mui-selected');
        });
    });


    const baseButtons = document.querySelectorAll('.MuiButtonBase-root');
    baseButtons.forEach(button => {
        button.addEventListener('click', function () {
            baseButtons.forEach(btn => {
                const location = btn.querySelector('.location');
                if (location) location.classList.remove('active');
            });
            const location = this.querySelector('.location');
            if (location) location.classList.add('active');
        });
    });


    const toggleButton = document.getElementById('toggle-sidebar');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('sidebar-open');
        });
    }
    if (closeButton && sidebar) {
        closeButton.addEventListener('click', function () {
            sidebar.classList.remove('sidebar-open');
        });
    }

//header
    const header = document.querySelector('.main-header-nav');
    const headers = document.querySelectorAll('.change');
    const logo = document.querySelector('img[alt="logo"]');
    if (header && logo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
                headers.forEach(headerItem => headerItem.classList.add('scrolled'));
                logo.src = 'image/logo/logo_nihome-removebg-preview.png';
            } else {
                header.classList.remove('scrolled');
                headers.forEach(headerItem => headerItem.classList.remove('scrolled'));
                logo.src = 'image/logo/logo_nihome-removebg-preview.png';
            }
        });
    }




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


    const content = document.getElementById('collapseContent');
    if (content && window.innerWidth <= 768) {
        content.style.display = 'none';
    }


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


    const modals = [
        document.getElementById('myModal'),
        document.getElementById('signUpModal'),
        document.getElementById('modal2')
    ].filter(modal => modal);


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


    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close') || modal.querySelector('#closeModal1') || modal.querySelector('#closeModal2');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                modal.style.display = 'none';
            });
        }
    });
});


window.onclick = function (event) {
    const modals = [
        document.getElementById('myModal'),
        document.getElementById('signUpModal'),
        document.getElementById('modal2')
    ].filter(modal => modal);
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};


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

//  banner
const images = [
    'image/thonhuom-banner-1.png',
    'image/hero-banner-more-vi.png',
    'image/new-generation-vi-1.jpg'
];
let currentIndex = 0;
function swapImage() {
    const imgElement = document.getElementById('bannerImage');
    const signatureText = document.getElementById('signatureText');
    if (imgElement && signatureText) {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        signatureText.style.display = images[currentIndex] === 'image/thonhuom-banner-1.png' ? 'block' : 'none';
    }
}
setInterval(swapImage, 2000);

function toggleCollapse() {
    const content = document.getElementById('collapseContent');
    if (content && window.innerWidth <= 768) {
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'flex' : 'none';
    }
}


document.getElementById('openModal2')?.addEventListener('click', function () {
    if (typeof $ !== 'undefined') {
        $('#myModal').modal('hide');
        $('#signUpModal').modal('show');
    }
});

function filterCards() {
    var typeValue = document.getElementById('typeFilter').value;
    var buildingValue = document.getElementById('buildingFilter').value;
    document.querySelectorAll('.building-card').forEach(function (card) {
        var matchType = (typeValue === 'all' || card.getAttribute('data-type') === typeValue);
        var matchBuilding = (buildingValue === 'all' || card.getAttribute('data-building') === buildingValue);
        card.style.display = (matchType && matchBuilding) ? '' : 'none';
    });
}
document.getElementById('typeFilter').addEventListener('change', filterCards);
document.getElementById('buildingFilter').addEventListener('change', filterCards);
document.getElementById('showAllBtn').addEventListener('click', function () {
    document.getElementById('typeFilter').value = 'all';
    document.getElementById('buildingFilter').value = 'all';
    filterCards();
});

