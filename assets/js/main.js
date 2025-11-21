
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

// Easing for a smooth finish
function easeOutQuad(t) {
  return t * (2 - t);
}

function animateCount(el, target, duration = 1500, suffix = "+") {
  const start = performance.now();
  const initial = 0;

  function tick(now) {
    const elapsed = now - start;
    let progress = Math.min(elapsed / duration, 1);
    progress = easeOutQuad(progress);

    const value = Math.round(initial + (target - initial) * progress);

    el.textContent = value.toLocaleString() + suffix;

    if (elapsed < duration) {
      requestAnimationFrame(tick);
    } else {
      // Ensure final value is exact
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(tick);
}

// Select all counters
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  // Look for data-target on the element or its closest parent stat-card
  let targetAttr = counter.dataset.target;
  if (!targetAttr) {
    const parent = counter.closest(".stat-card");
    targetAttr = parent ? parent.dataset.target : null;
  }

  const target = targetAttr ? parseInt(targetAttr, 10) : 0;
  if (!target || isNaN(target)) {
    // If no valid target, skip
    counter.textContent = "0";
    return;
  }

  // decide duration based on size (larger target -> shorter duration)
  // tweak these numbers to change speed behavior
  let duration;
  if (target >= 10000) duration = 700;      // very fast for large numbers
  else if (target >= 1000) duration = 1200; // medium-fast
  else duration = 2000;                     // slower for small numbers

  // If you want no '+' for small ones (like mentors 30), you can remove suffix conditionally:
  const suffix = target >= 100 ? "+" : ""; // keeps + for 100+ only (adjust as needed)

  // If data-target is on the parent but not on the .count, set it so other code can read it later
  if (!counter.dataset.target && counter.closest(".stat-card")) {
    counter.dataset.target = target;
  }

  animateCount(counter, target, duration, suffix);
});



const slidesData = [
  {
    img: "https://images.pexels.com/photos/14585222/pexels-photo-14585222.jpeg",
    text: "Qriocity made my final project so much easier. They helped me choose a good topic and were there to help me whenever I needed. I'm really glad I found them.",
    name: "Bharti Narayana",
    course: "CSE, VIT University",
  },
  {
    img: "https://images.pexels.com/photos/14585222/pexels-photo-14585222.jpeg",
    text: "Their support was beyond expectations. They explained things clearly and guided step-by-step.",
    name: "Rohit Kumar",
    course: "ECE, SRM University",
  },
  {
    img: "",
    text: "Best guidance for project development. Friendly staff and fast support.",
    name: "Ajay Karthik",
    course: "IT, Anna University",
  },
   
];

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
let currentIndex = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active-dot", i === index));
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    resetAutoSlide();
  });
});

function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

showSlide(currentIndex);
startAutoSlide();


document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault(); // ✅ Stops link from opening
    document.getElementById("projectPopup").classList.add("active");
  });
});

document.getElementById("closePopup").onclick = function(){
  document.getElementById("projectPopup").classList.remove("active");
};

// ✅ Close if clicked outside popup
document.getElementById("projectPopup").addEventListener("click", function(e){
  if(e.target === this){
    this.classList.remove("active");
  }
});

////////////////////////////////////////////////////////////////




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


      emailjs.init("_VcwjPcFuBrB03JBZ"); // ✅ Your Public Key

    document.getElementById("project-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_cj59ash", "template_490hfmk", this)
    .then(() => {
        alert("✅ Your Booking Request Has Been Sent Successfully!");
        this.reset();
    }, (err) => {
        alert("❌ Message Failed! Check Console.");
        console.log(err);
    });
    });


    let totalSeconds = 5 * 60; // 5 minutes

  const minuteBox = document.getElementById("minuteBox");
  const secondBox = document.getElementById("secondBox");

  setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minuteBox.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + " Minutes";
    secondBox.innerHTML = (seconds < 10 ? "0" + seconds : seconds) + " Seconds";

    if (totalSeconds > 0) totalSeconds--;
  }, 1000);


  const track = document.getElementById("track");

  let scrollAmount = 0;
  const speed = 1;

  let isMobile = window.innerWidth <= 600;

  function slide() {
    if (!isMobile) { 
      // ONLY DESKTOP AUTO SCROLL
      scrollAmount -= speed;
      track.style.transform = `translateX(${scrollAmount}px)`;

      const firstCard = track.children[0];
      const firstCardWidth = firstCard.offsetWidth + 20;

      if (Math.abs(scrollAmount) > firstCardWidth) {
        track.appendChild(firstCard);
        scrollAmount += firstCardWidth;
      }
    }
    requestAnimationFrame(slide);
  }

  slide();
