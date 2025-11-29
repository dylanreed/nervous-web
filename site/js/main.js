// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // FAQ collapsible sections
  const faqHeaders = document.querySelectorAll('.faq-header');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Bot section headers
  faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;

      this.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('open');
    });
  });

  // Individual questions
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      this.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open');
    });
  });
});
