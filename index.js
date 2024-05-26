let slides = document.querySelectorAll(".slider img");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let imgId = document.querySelector(".img-id");
let thumbnailsContainer = document.querySelector(".thumbnails-container");

let currentSlide = 0;

// Create thumbnails
slides.forEach((slide, index) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = slide.src;
    thumbnail.classList.add("thumbnail");
    if (index === 0) thumbnail.classList.add("active");
    thumbnail.addEventListener("click", () => goToSlide(index));
    thumbnailsContainer.appendChild(thumbnail);
});

let thumbnails = document.querySelectorAll(".thumbnail");

function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
}

function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    thumbnails[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    thumbnails[currentSlide].classList.add("active");
    imgId.textContent = `Image ${currentSlide + 1}`;
    updateButtons();
}

prevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
});

// Initial button state update
updateButtons();
