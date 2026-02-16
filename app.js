// ==================== SLIDER FUNCTIONALITY ====================
let slideCounter = 0;
let slideDirection = 1; // 1 for forward, -1 for backward
let autoSlideTimer;

function showSlides() {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('indicator');
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('active');
    }
    
    // Ensure slideCounter is within bounds
    if (slideCounter >= slides.length) {
        slideCounter = slides.length - 1;
    }
    if (slideCounter < 0) {
        slideCounter = 0;
    }
    
    // Show current slide
    slides[slideCounter].style.display = 'flex';
    slides[slideCounter].classList.add('active');
    
    // Update indicators
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[slideCounter].classList.add('active');
}

function currentSlide(n) {
    slideCounter = n;
    showSlides();
}

function changeSlide(n) {
    slideCounter += n;
    let slides = document.getElementsByClassName('slide');
    
    if (slideCounter >= slides.length) {
        slideCounter = 0;
    }
    if (slideCounter < 0) {
        slideCounter = slides.length - 1;
    }
    
    showSlides();
}

// Previous button
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            changeSlide(-1);
            clearInterval(autoSlideTimer);
            startAutoSlide();
        });
    }

    // Next button
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            changeSlide(1);
            clearInterval(autoSlideTimer);
            startAutoSlide();
        });
    }

    // Indicator dots
    let indicators = document.querySelectorAll('.indicator');
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            slideCounter = index;
            showSlides();
            clearInterval(autoSlideTimer);
            startAutoSlide();
        });
    });

    // Start slider
    showSlides();
    startAutoSlide();
    console.log('Slider started with bidirectional auto-slide!');
});

// Auto slide function with reverse capability
function autoSlideFunction() {
    let slides = document.getElementsByClassName('slide');
    
    // Move in current direction
    slideCounter += slideDirection;
    
    // Check if we've reached the end (forward direction)
    if (slideCounter >= slides.length) {
        slideCounter = slides.length - 1;
        slideDirection = -1; // Reverse direction
    }
    
    // Check if we've reached the beginning (backward direction)
    if (slideCounter < 0) {
        slideCounter = 0;
        slideDirection = 1; // Forward direction
    }
    
    showSlides();
}

function startAutoSlide() {
    autoSlideTimer = setInterval(autoSlideFunction, 3000); // 3 seconds interval
}

// Pause on hover
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlideTimer);
    });

    // Resume on mouse leave
    sliderContainer.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
}

// ==================== TAB SWITCHING ====================
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const activeContent = document.getElementById(tabName);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});

// ==================== SECTION NAVIGATION ====================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSection = link.dataset.section;
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});