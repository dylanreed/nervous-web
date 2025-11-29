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

  // Project tabs (Our Work page)
  const projectTabs = document.querySelectorAll('.project-tab');
  const projectPanels = document.querySelectorAll('.project-panel');

  // Function to switch tabs
  function switchToProject(projectId) {
    const targetTab = document.querySelector('.project-tab[data-project="' + projectId + '"]');
    const targetPanel = document.getElementById('project-' + projectId);

    if (targetTab && targetPanel) {
      // Remove active class from all tabs and panels
      projectTabs.forEach(t => t.classList.remove('active'));
      projectPanels.forEach(p => p.classList.remove('active'));

      // Add active class to target tab and panel
      targetTab.classList.add('active');
      targetPanel.classList.add('active');
    }
  }

  // Handle tab clicks
  projectTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      switchToProject(projectId);
    });
  });

  // Check for project parameter in URL on page load
  const urlParams = new URLSearchParams(window.location.search);
  const projectParam = urlParams.get('project');
  if (projectParam && projectTabs.length > 0) {
    switchToProject(projectParam);
  }

  // Bot Carousel - shows 3 cards at a time
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselCards = document.querySelectorAll('.carousel-card');
  const carouselDotsContainer = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  if (carouselTrack && carouselCards.length > 0) {
    let currentIndex = 0;
    let autoRotateInterval;
    const visibleCount = 3;
    const totalCards = carouselCards.length;

    // Create dots (one per card position)
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i < visibleCount) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => goToSlide(i));
      carouselDotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.carousel-dot');

    function updateVisibleCards() {
      // Hide all cards first
      carouselCards.forEach(card => card.classList.remove('visible'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Show 3 cards starting from currentIndex (wrapping around)
      for (let i = 0; i < visibleCount; i++) {
        const cardIndex = (currentIndex + i) % totalCards;
        carouselCards[cardIndex].classList.add('visible');
        dots[cardIndex].classList.add('active');
      }
    }

    function goToSlide(index) {
      currentIndex = index % totalCards;
      updateVisibleCards();
      resetAutoRotate();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateVisibleCards();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateVisibleCards();
    }

    function startAutoRotate() {
      autoRotateInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoRotate() {
      clearInterval(autoRotateInterval);
      startAutoRotate();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoRotate(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoRotate(); });

    // Pause on hover
    carouselTrack.addEventListener('mouseenter', () => {
      clearInterval(autoRotateInterval);
    });

    carouselTrack.addEventListener('mouseleave', () => {
      startAutoRotate();
    });

    // Initialize and start
    updateVisibleCards();
    startAutoRotate();
  }
});
