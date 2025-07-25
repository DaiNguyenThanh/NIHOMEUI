/** @format */

let mybutton = document.getElementById("back-header");
let isScrolling;

window.onscroll = function () {
	window.clearTimeout(isScrolling);

	isScrolling = setTimeout(function () {
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
		behavior: "smooth",
	});
}

function setSort(option) {
	document.getElementById("sortLabel").innerText = option;
	// Gọi hàm lọc hoặc sắp xếp lại dữ liệu ở đây nếu cần
	console.log("Đã chọn sắp xếp:", option);
}

document.addEventListener("DOMContentLoaded", function () {
	let gallery = document.querySelector("#galleryPicture");
	let gallerypicturemodal = new bootstrap.Modal(
		document.getElementById("GalleryPictureModal"),
	);
	gallery.addEventListener("click", function (event) {
		event.preventDefault();
		if (
			event.target.closest(".carousel-control-prev") ||
			event.target.closest(".carousel-control-next") ||
			event.target.closest(".carousel-indicators")
		) {
			return;
		}
		gallerypicturemodal.show();
	});

	// show modal preview product when click product
	let products = document.querySelectorAll(".product-item");
	var modal = new bootstrap.Modal(
		document.getElementById("PreviewProductModal"),
	);
	products.forEach(function (p) {
		p.addEventListener("click", function (event) {
			if (
				event.target.closest(".carousel-control-prev") ||
				event.target.closest(".carousel-control-next") ||
				event.target.closest(".carousel-indicators")
			) {
				return;
			}
			modal.show();
		});
	});
	// end

	// scroll custom-carousel-indicators-preview-image when carousel run
	var carousel = document.querySelector("#carouselExampleIndicators4");
	var indicators = document.querySelectorAll(
		".custom-carousel-indicators-preview-image button",
	);
	var indicatorContainer = document.querySelector(
		".custom-carousel-indicators-preview-image",
	);

	carousel.addEventListener("slide.bs.carousel", function (event) {
		var activeIndex = event.to; // Get the index of the active item
		// Update active class for indicators
		indicators.forEach(function (indicator, index) {
			if (index === activeIndex) {
				indicator.classList.add("active");
			} else {
				indicator.classList.remove("active");
			}
		});

		// Scroll the indicator into view
		var activeIndicator = indicators[activeIndex];
		var offsetLeft = activeIndicator.offsetLeft;
		var indicatorWidth = activeIndicator.offsetWidth;
		var containerWidth = indicatorContainer.offsetWidth;
		var scrollPosition =
			offsetLeft - containerWidth / 2 - 12 - indicatorWidth / 4;
		indicatorContainer.scrollTo({
			left: scrollPosition,
			behavior: "smooth",
		});
	});
});

const header = document.querySelector(".main-header-nav");
const headers = document.querySelectorAll(".change");
const logo = document.querySelector('img[alt="logo"]');
if (header && logo) {
	window.addEventListener("scroll", function () {
		if (window.scrollY > 0) {
			header.classList.add("scrolled");
			headers.forEach((headerItem) => headerItem.classList.add("scrolled"));
			logo.src = "IMG/logo_nihome-removebg-preview.png";
		} else {
			header.classList.remove("scrolled");
			headers.forEach((headerItem) => headerItem.classList.remove("scrolled"));
			logo.src = "IMG/logo_nihome-removebg-preview.png";
		}
	});
}

const priceSlider = document.getElementById("price-slider");
const priceFromInput = document.getElementById("priceFrom");
const priceToInput = document.getElementById("priceTo");

noUiSlider.create(priceSlider, {
	start: [0, 10000000],
	connect: true,
	step: 1000000,
	range: {
		min: 0,
		max: 10000000,
	},
	format: {
		to: (value) => Math.round(value),
		from: (value) => Number(value),
	},
});

priceSlider.noUiSlider.on("update", (values) => {
	const from = Number(values[0]);
	const to = Number(values[1]);
	priceFromInput.value = from.toLocaleString("vi-VN");
	priceToInput.value = to.toLocaleString("vi-VN");
});

// nexxt page function
function Nextpage(button) {
	const roomName =
		button.closest(".col-12").querySelector(".hotel-name")?.innerText || "";

	localStorage.setItem("roomName", roomName);
	// localStorage.setItem("roomPrice", roomPrice);
	// localStorage.setItem("roomImage", roomImage);

	window.location.href = "detail.html?roomName=" + encodeURIComponent(roomName);
}
