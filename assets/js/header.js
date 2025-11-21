
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Dropdown logic
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');

    toggle.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("active");
      }
    });
  });

});

