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
});
