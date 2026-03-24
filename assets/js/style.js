// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lenis (Smooth Scrolling)
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. Preloader
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => (loader.style.display = "none"), 500);
  }, 1500);

  // 3. Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Hero Animation
  gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1.6,
    ease: "power3.out",
  });

  // Reveal Text Animation
  gsap.utils.toArray(".reveal-text").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Reveal Service Cards (Staggered Grid)
  // Bento Grid Reveal (Staggered)
  gsap.from(".bento-item", {
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)",
    clearProps: "all", // <--- ADD THIS LINE: Fixes the blur/stuck issue
  });

  // ... previous animations ...

  // Reveal the Value Cards (New Animation)
  gsap.from(".reveal-value", {
    scrollTrigger: {
      trigger: ".value-grid",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    clearProps: "all", // Important to prevent blur
  });

  // ... existing code ...

  // 4. Typed.js Implementation
  if (document.getElementById("units")) {
    new Typed("#units", {
      strings: [
        "Creativity.",
        "Innovation.",
        "Strategic Precision.",
        "BlueSky Media Promotions.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });
  }

  if (document.getElementById("units2")) {
    new Typed("#units2", {
      strings: [
        "Connecting Brands.",
        "Converting Audiences.",
        "Captivating Markets.",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      showCursor: false,
    });
  }

  // 5. Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const bars = document.querySelectorAll(".bar");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");

      if (mobileNav.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    });
  });

  // Mobile dropdown toggle
  document.querySelectorAll(".mobile-link.has-dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const subLinks = dropdown.nextElementSibling;
      subLinks.classList.toggle("active");
    });
  });

  // Close mobile menu
  const closeBtn = document.querySelector(".close-menu-btn");
  const backdrop = document.querySelector(".mobile-backdrop");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  }
});


document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const body = document.body;

    // Prevent scrolling while loader is active
    body.classList.add('loading');

    window.addEventListener('load', () => {
        // Set a minimum time to show the animation (e.g., 2.5s)
        setTimeout(() => {
            if(loader) {
                loader.classList.add('hidden');
                body.classList.remove('loading');
            }
        }, 2500); 
    });
});