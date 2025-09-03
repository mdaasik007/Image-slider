document.addEventListener("DOMContentLoaded", () => {
    // Select the slider track and individual slides
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");

    // Select the navigation buttons and dot container
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotContainer = document.querySelector(".dots-container");

    let currentSlide = 0;
    const slideCount = slides.length;

    // Create dots for each slide and add event listeners
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        
        dot.addEventListener("click", () => goToSlide(index));
        dotContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // Function to update the active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    // Function to go to a specific slide by index
    function goToSlide(index) {
        currentSlide = index;
        // Use a 100% transform to move the slider track one slide at a time
        sliderTrack.style.transform = `translateX(-${currentSlide * 100 / slideCount}%)`;
        updateDots();
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    // Add event listeners to buttons
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 4000);
});