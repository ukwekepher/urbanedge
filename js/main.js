/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  // Dynamic Header Styling on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggles
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => mobileMenu.classList.add("active"));
  }
  
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => mobileMenu.classList.remove("active"));
  }
});



/* =========================================================
   PROPERTY SEARCH SCROLL ANIMATION
========================================================= */

const propertySearch = document.querySelector(".property-search");

if (propertySearch) {

    const searchObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    searchObserver.observe(propertySearch);
}


/* =========================================================
   PROPERTIES SECTION SCROLL ANIMATION
========================================================= */

const propertiesSection = document.querySelector(".properties-section");

if (propertiesSection) {

    const propertiesObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.20
        }
    );

    propertiesObserver.observe(propertiesSection);
}

/* =========================================================
   ABOUT SECTION SCROLL ANIMATION
========================================================= */

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    aboutObserver.observe(aboutSection);
}

/* =========================================================
   SERVICES SECTION SCROLL ANIMATION
========================================================= */

const servicesSection = document.querySelector(".services-section");

if (servicesSection) {

    const servicesObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    servicesObserver.observe(servicesSection);
}

/* =========================================================
   TESTIMONIAL SECTION SCROLL ANIMATION
========================================================= */

const testimonialSection = document.querySelector(".testimonial-section");

if (testimonialSection) {

    const testimonialObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    testimonialObserver.observe(testimonialSection);
}  

/* =========================================================
   WHY CHOOSE US SCROLL ANIMATION
========================================================= */

const whySection = document.querySelector(".why-section");

if (whySection) {

    const whyObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    whyObserver.observe(whySection);
}

/* =========================================================
   INVESTMENT CTA SCROLL ANIMATION
========================================================= */

const investmentSection =
    document.querySelector(".investment-section");

if (investmentSection) {

    const investmentObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    investmentObserver.observe(investmentSection);
}

/* =========================================================
   VISION & MISSION SCROLL ANIMATION
========================================================= */

const visionSection =
    document.querySelector(".vision-section");

if (visionSection) {

    const visionObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    visionObserver.observe(visionSection);
}

/* =========================================================
   CORE VALUES SCROLL ANIMATION
========================================================= */

const valuesSection =
    document.querySelector(".values-section");

if (valuesSection) {

    const valuesObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    valuesObserver.observe(valuesSection);
}

/* =========================================================
   TEAM SCROLL ANIMATION
========================================================= */

const teamSection =
    document.querySelector(".team-section");

if (teamSection) {

    const teamObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    teamObserver.observe(teamSection);
}


/* =========================================================
   LOCATION SCROLL ANIMATION
========================================================= */

const locationSection =
    document.querySelector(".location-section");

if (locationSection) {

    const locationObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    locationObserver.observe(locationSection);
} 

/* =========================================================
   CONTACT SCROLL ANIMATION
========================================================= */

const contactSection =
    document.querySelector(".contact-section");

if (contactSection) {

    const contactObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    contactObserver.observe(contactSection);
}

/* =========================================================
   BACK TO TOP NAVIGATION
========================================================= */

const backToTop = document.getElementById("backToTop");
const heroSection = document.getElementById("home");


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        (scrollPosition / pageHeight) * 100;


    /* Show after 40% */

    if (scrollPercentage >= 20) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* =========================================================
   RETURN TO HERO
========================================================= */

backToTop.addEventListener("click", () => {

    heroSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

/* =========================================================
   URBAN EDGE PROMO POPUP
========================================================= */

const promoPopup = document.getElementById("promoPopup");
const promoClose = document.getElementById("promoClose");

let promoShown = false;


/* SHOW AT 25% SCROLL */

window.addEventListener("scroll", () => {

    if (promoShown) return;

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight;

    const screenHeight =
        window.innerHeight;

    const scrollPercent =
        (scrollTop / (pageHeight - screenHeight)) * 100;


    if (scrollPercent >= 25) {

        promoShown = true;

        promoPopup.classList.add("active");

        document.body.style.overflow = "hidden";
    }

});


/* CLOSE POPUP */

promoClose.addEventListener("click", () => {

    promoPopup.classList.remove("active");

    document.body.style.overflow = "";

});