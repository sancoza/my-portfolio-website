// ================= Owl Carousel =================
$(function () {
  $('#slider-list').owlCarousel({
    items: 9,                 // koliko logotipa staje u redu
    margin: 5,               // razmak između logotipa
    loop: true,
    autoplay: true,
    autoplayTimeout: 0,       // nema čekanja
    autoplaySpeed: 4000,      // brzina (u ms) — smanji ili povećaj
    slideTransition: 'linear',// linearno pomeranje
    autoplayHoverPause: false,// ne pauzira kad se pređe mišem
    smartSpeed: 0,            // sprečava trzaje
    responsive: {
      0: { items: 3, margin: 5 },
      600: { items: 5, margin: 5 },
      1000: { items: 9, margin: 5 }
    }
  });
});

$(function () {
  $('#design-slider-list').owlCarousel({
    items: 3,
    autoplay: true,
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    margin: 30,
    nav: true,
    smartSpeed: 900,
    mouseDrag: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 }
    }
  });
});

$(function () {
  $('.designs').owlCarousel({
    items: 1,
    autoplay: false,
    autoplayHoverPause: true,
    navText: false,
    mouseDrag: false,
    dots: true
  });
});

// ================= WOW Animate =================
$(function () {
  new WOW().init();
});

// ================= Magnific Popup =================
$(function () {
  $("#diplomas").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });
});

// ================= SMART HEADER (hide on scroll down, show on scroll up) =================
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (!nav) return; // zaštita ako nema <nav>

  let lastY = window.scrollY || 0;
  let ticking = false;

  // Minimalna promena da bismo reagovali (px) – sprečava "drhtanje"
  const DELTA = 8;
  // Od kog Y-a dozvoljavamo sakrivanje (px)
  const START_HIDE_AFTER = 120;

  function onScrollSmartHeader() {
    const y = Math.max(0, window.scrollY || 0); // zaštita od iOS bounce-a
    const diff = y - lastY;

    // Dodaj/ukloni stil za skrolovani nav (pozadina/senka)
    if (y > 10) {
      nav.classList.add('is-scrolled');
      document.body.classList.add('has-fixed-nav');
    } else {
      nav.classList.remove('is-scrolled');
      document.body.classList.remove('has-fixed-nav');
    }

    // Ako je promena premala, ne radi ništa (glađe)
    if (Math.abs(diff) <= DELTA) {
      lastY = y;
      return;
    }

    // Skrol nadole i dovoljno udaljeni od vrha -> sakrij
    if (diff > 0 && y > START_HIDE_AFTER) {
      nav.classList.add('is-hidden');
    }
    // Skrol nagore -> prikaži
    else if (diff < 0) {
      nav.classList.remove('is-hidden');
    }

    lastY = y;
  }

  // rAF throttle za glatkoću i performanse
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScrollSmartHeader();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // inicijalna provera
  onScrollSmartHeader();
});
