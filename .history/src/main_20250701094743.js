const slides = [
  {
    title: "Brand naming & guidelines",
    subtitle: "Lean Product Roadmap",
    year: "2019 Project",
    image: "/public/assets/desktop/image-slide-1.jpg"
  },
  {
    title: "Brand identity & merchandise",
    subtitle: "New Majestic Hotel",
    year: "2018 Project",
    image: "./public/assets/desktop/image-slide-2.jpg"
  },
  {
    title: "Brand identity & web design",
    subtitle: "Crypto Dashboard",
    year: "2016 Project",
    image: "./public/assets/desktop/image-slide-3.jpg"
  }
];

let current = 0;
const title = document.getElementById('carousel-title');
const subtitle = document.getElementById('carousel-subtitle');
const year = document.getElementById('carousel-year');
const image = document.getElementById('carousel-image');

const toggleButton = document.querySelector('.menu-toggle');
const navbarRight = document.querySelector('.navbar-right');
// Ensure the toggle button is visible on mobile
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navbarRight.classList.toggle('active');

  // Optional: toggle menu icon to "X" or back
  const icon = toggleButton.querySelector('img');
  if (navbarRight.classList.contains('active')) {
    icon.src = './src/assets/mobile/icon-cross.svg';
    icon.alt = 'Close menu';
  } else {
    icon.src = './src/assets/mobile/icon-hamburger.svg';
    icon.alt = 'Open menu';
  }
});

// Carousel functionality
function updateSlide(index) {
  const slide = slides[index];
  title.textContent = slide.title;
  subtitle.textContent = slide.subtitle;
  year.textContent = slide.year;
  image.style.backgroundImage = `url(${slide.image})`;
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide(current);
});

// Optional: keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
  if (e.key === 'ArrowRight') document.getElementById('next').click();
});

// Initialize
updateSlide(current);
