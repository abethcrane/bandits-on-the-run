// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileXButton = document.querySelector('.mobile-x-button');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileSocialLinks = document.querySelectorAll('.mobile-social-link');
  
  // Toggle mobile menu
  navToggle.addEventListener('click', function() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    
    navToggle.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking the X button
  mobileXButton.addEventListener('click', function() {
    navToggle.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking on a navigation link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Close mobile menu when clicking on a social link
  mobileSocialLinks.forEach(link => {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Close mobile menu when clicking outside
  mobileMenuOverlay.addEventListener('click', function(event) {
    if (event.target === mobileMenuOverlay) {
      navToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 575) {
      navToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});
