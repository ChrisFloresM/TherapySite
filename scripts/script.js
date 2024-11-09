
/* Adding nav mobile navigation */
document.querySelector('.btn-mobile-nav').addEventListener('click', navButtonFunction);

function navButtonFunction() {
   document.querySelector(".header").classList.toggle('nav-open');
}

/* Smooth scroll animation */
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
   link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = link.getAttribute('href');

      /* Scroll to top for elements w/o a href*/
      if (href === "#") {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         });
      }

      /* Scroll to other links */
      if (href !== "#" && href.startsWith("#")) {
         const sectionElement = document.querySelector(href);
         sectionElement.scrollIntoView({
            behavior: "smooth"
         })
      }

      /* Close mobile navigation */
      if (link.classList.contains('main-nav-link')) {
         navButtonFunction();
      }
   });
});

/* Sticky navigation - intersection observer */
const sectionHeroElement = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function(entries) {
   const ent = entries[0];

   if (!ent.isIntersecting) {
      document.querySelector('.header').classList.add('sticky');
      sectionHeroElement.style.marginTop = "15rem";
   } else {
      document.querySelector('.header').classList.remove('sticky');
      sectionHeroElement.style.marginTop = "0";
   }


}, {
   root: null, /* In the viewport */
   rootMargin: "-80px",
   threshold: 0
});

obs.observe(sectionHeroElement);
