document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  // Clone first and last slides for infinite loop
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.prepend(lastClone);

  let allSlides = Array.from(track.children);
  let currentIndex = 1; // Start at first real slide
  let slideWidth = allSlides[currentIndex].getBoundingClientRect().width;

  // Set initial position
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  // Update slideWidth on window resize (responsive)
  window.addEventListener('resize', () => {
    slideWidth = allSlides[currentIndex].getBoundingClientRect().width;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });

  // Move to slide
  function moveToSlide(index) {
    track.style.transition = 'transform 0.7s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  // Next / Prev buttons
  nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveToSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    moveToSlide(currentIndex);
  });

  // Infinite loop logic
  track.addEventListener('transitionend', () => {
    if (allSlides[currentIndex] === firstClone) {
      track.style.transition = 'none';
      currentIndex = 1;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
    if (allSlides[currentIndex] === lastClone) {
      track.style.transition = 'none';
      currentIndex = slides.length;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex++;
    moveToSlide(currentIndex);
  }, 5000);
});
