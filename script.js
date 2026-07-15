// ===== Scroll Reveal Animation =====
document.addEventListener("DOMContentLoaded", function () {

  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el, i) => {
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = (i % 6) * 0.12 + "s";
    }
    observer.observe(el);
  });

  // ===== Navbar entrance =====
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.add("nav-animate");
  }

  // ===== Active nav link highlight =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
});
