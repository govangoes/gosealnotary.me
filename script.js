/* GoSeal Notary — script.js
   Minimal JS: mobile nav toggle + FAQ accordion + smooth scroll
*/

(function () {
  'use strict';

  // ── Mobile navigation toggle ──────────────────────
  var navToggle = document.getElementById('nav-toggle');
  var navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked (single-page scrolling)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── FAQ accordion ────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer  = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen  = btn.getAttribute('aria-expanded') === 'true';

      // Collapse all others
      document.querySelectorAll('.faq-question').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
          if (otherAnswer) otherAnswer.classList.remove('open');
        }
      });

      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (answer) answer.classList.toggle('open', !isOpen);
    });
  });

  // ── Current year in footer ────────────────────────
  var yearEl = document.getElementById('current-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

})();
