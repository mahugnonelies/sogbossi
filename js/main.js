document.addEventListener("DOMContentLoaded", () => {

  /* ===== DRAWER ===== */
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("drawer");

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });

    document.querySelectorAll(".drawer a").forEach(link => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
      });
    });
  }

  /* ===== HERO SLIDER ===== */
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  if (slides.length > 0) {
    const showSlide = i => {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    };

    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);

    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    if (next && prev) {
      next.onclick = () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      };

      prev.onclick = () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
      };
    }
  }

  /* ===== FADE UP ON SCROLL ===== */
  const fadeElements = document.querySelectorAll(".fade-up");

  const handleFade = () => {
    fadeElements.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 120) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleFade);
  handleFade();

  /* ===== DOMAIN ICONS ===== */
  const domainIcons = document.querySelectorAll(".domain-icon");

  if (domainIcons.length) {
    domainIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        domainIcons.forEach(i => i.classList.remove("active"));
        icon.classList.add("active");
      });
    });
  }

  /* ===== TESTIMONIALS ===== */
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let testimonialIndex = 0;

  if (testimonials.length && dots.length) {
    const showTestimonial = i => {
      testimonials.forEach(t => t.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      testimonials[i].classList.add("active");
      dots[i].classList.add("active");
    };

    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      showTestimonial(testimonialIndex);
    }, 5000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        testimonialIndex = i;
        showTestimonial(i);
      });
    });
  }

  /* ===== EVENTS ===== */
  const eventItems = document.querySelectorAll(".event-item");
  const eventDates = document.querySelectorAll(".event-date");

  if (eventItems.length && eventDates.length) {
    eventItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        eventDates.forEach(d => d.classList.remove("active"));
        eventDates[i].classList.add("active");
      });
    });
  }

  /* ===== NEWSLETTER ===== */
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Merci pour votre inscription 🙏");
    });
  }

  /* ===== CONSULTATION TABS ===== */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabTexts = document.querySelectorAll(".tab-text");

  if (tabButtons.length && tabTexts.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabTexts.forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add("active");
      });
    });
  }

  /* ===== CONTACT FORM -> WHATSAPP ===== */
  const whatsappForm = document.getElementById("whatsappForm");

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", e => {
      e.preventDefault();

      const message =
        `📩 *NOUVEAU MESSAGE – SA MAJESTE SOGBOSSI*\n\n` +
        `👤 Nom : ${document.getElementById("nom").value}\n` +
        `👤 Prénoms : ${document.getElementById("prenoms").value}\n` +
        `📧 Email : ${document.getElementById("email").value}\n` +
        `📞 Téléphone : ${document.getElementById("telephone").value}\n\n` +
        `📝 Message :\n${document.getElementById("message").value}`;

      window.open(
        `https://wa.me/22999823910?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    });
  }

  /* ===== CONSULTATION FORM -> WHATSAPP ===== */
  const consultationForm = document.getElementById("consultationWhatsappForm");

  if (consultationForm) {
    consultationForm.addEventListener("submit", e => {
      e.preventDefault();

      const message =
        `🧿 *DEMANDE DE CONSULTATION*\n\n` +
        `👤 Nom : ${document.getElementById("c-nom").value}\n` +
        `👤 Prénoms : ${document.getElementById("c-prenoms").value}\n` +
        `📧 Email : ${document.getElementById("c-email").value}\n` +
        `📞 Téléphone : ${document.getElementById("c-telephone").value}\n` +
        `🏠 Adresse : ${document.getElementById("c-adresse").value || "N/A"}\n` +
        `🌍 Pays : ${document.getElementById("c-pays").value || "N/A"}\n\n` +
        `📝 Problème :\n${document.getElementById("c-probleme").value}`;

      window.open(
        `https://wa.me/22999823910?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    });
  }

const pageLinks = document.querySelectorAll(".page-transition");
const pageFade = document.getElementById("pageFade");

if (pageLinks.length && pageFade) {
  pageLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const href = link.getAttribute("href");
      pageFade.classList.add("active");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
}

/* ===== ACTIVE NAV LINK ===== */
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// DESKTOP NAV
document.querySelectorAll(".nav-desktop a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("nav-btn");
  }
});

// DRAWER NAV (OPTIONNEL : surligner aussi la page active)
document.querySelectorAll(".drawer a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===== AUTO PLAY VIDEO ON SCROLL =====
const autoVideo = document.getElementById("autoVideo");

if (autoVideo) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          autoVideo.play().catch(() => {});
        } else {
          autoVideo.pause();
        }
      });
    },
    {
      threshold: 0.6 // 60% visible = lecture
    }
  );

  observer.observe(autoVideo);
}

// ===== IMAGE CAROUSEL =====
const track = document.getElementById("carouselTrack");
let index = 0;
let startX = 0;
let isDragging = false;

if (track) {
  const items = document.querySelectorAll(".carousel-item");
  const total = items.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // AUTO SLIDE
  setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
  }, 5000);

  // TOUCH (MOBILE)
  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(endX);
  });

  // MOUSE (DESKTOP)
  track.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.clientX;
  });

  track.addEventListener("mouseup", e => {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe(e.clientX);
  });

  function handleSwipe(endX) {
    const diff = startX - endX;

    if (diff > 50) {
      index = (index + 1) % total;
    } else if (diff < -50) {
      index = (index - 1 + total) % total;
    }

    updateCarousel();
  }
}

// ===== VIDEO CAROUSEL =====
const videoTrack = document.querySelector(".video-track");
const videoSlides = document.querySelectorAll(".video-slide");
const videoElements = document.querySelectorAll(".video-slide video");
const videoPrevBtn = document.querySelector(".video-nav.prev");
const videoNextBtn = document.querySelector(".video-nav.next");

let videoIndex = 0;
let videoStartX = 0;
let videoIsDragging = false;

const updateVideoCarousel = () => {
  videoTrack.style.transform = `translateX(-${videoIndex * 100}%)`;

  videoElements.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  videoElements[videoIndex].play();
};

if (videoTrack && videoSlides.length) {

  updateVideoCarousel();

  videoNextBtn.addEventListener("click", () => {
    videoIndex = (videoIndex + 1) % videoSlides.length;
    updateVideoCarousel();
  });

  videoPrevBtn.addEventListener("click", () => {
    videoIndex = (videoIndex - 1 + videoSlides.length) % videoSlides.length;
    updateVideoCarousel();
  });

  // TOUCH (MOBILE)
  videoTrack.addEventListener("touchstart", e => {
    videoStartX = e.touches[0].clientX;
  });

  videoTrack.addEventListener("touchend", e => {
    const diff = videoStartX - e.changedTouches[0].clientX;
    if (diff > 50) videoNextBtn.click();
    if (diff < -50) videoPrevBtn.click();
  });
}

document.querySelectorAll(".unmute-btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const video = btn.previousElementSibling;
    video.muted = false;
    video.play();
    btn.style.display = "none";
  });
});




  

  
});
