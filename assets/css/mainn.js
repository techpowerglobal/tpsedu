// Load Header
    fetch('./header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;

        // ✅ Attach dropdown behavior after header loads
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('click', function (e) {
            // prevent links from immediately navigating
            if (window.innerWidth <= 768) e.preventDefault();
            this.classList.toggle('active');
          });
        });
      })
      .catch(err => console.error('Header failed to load:', err));

    // Load Footer
    fetch('./footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer').innerHTML = data)
      .catch(err => console.error('Footer failed to load:', err));

      
// Deliverables section animation
const deliverablesSection = document.querySelector('.deliverables-section');
if (deliverablesSection) {
  window.addEventListener('scroll', () => {
    const sectionTop = deliverablesSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (sectionTop < screenHeight - 100) {
      deliverablesSection.classList.add('show');
    }
  });
}

// Deliverable items staggered animation
const deliverables = document.querySelectorAll('.deliverable-item');
if (deliverables.length > 0) {
  window.addEventListener('scroll', () => {
    deliverables.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        setTimeout(() => item.classList.add('show'), index * 150);
      }
    });
  });
}

// FAQ toggle
document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', () => faq.classList.toggle('active'));
});
// AOS animation init
AOS.init({ duration: 1000, once: true });
 const toggleBtn = document.getElementById('fab-toggle');
const secondaryBtns = document.querySelectorAll('.fab-btn.secondary');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  secondaryBtns.forEach(btn => {
    btn.classList.toggle('show', isOpen);
  });
  // Rotate plus button to become X when open
  toggleBtn.querySelector('i').classList.toggle('fa-plus', !isOpen);
  toggleBtn.querySelector('i').classList.toggle('fa-times', isOpen);
});
