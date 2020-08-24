const slider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // in query selector use ('') in brackets
  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // Animation links (inside foreach(() => {}))
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.4}s`; //  always use `` these to make ${} work
      }
    });

    burger.classList.toggle("toggle");
  });
};

slider();
