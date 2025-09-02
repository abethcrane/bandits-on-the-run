// Footer Mailing List Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mailing-list-form');
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');
  const successMessage = document.getElementById('success-message');
  
  if (!form || !emailInput || !emailError || !successMessage) {
    return; // Exit if elements don't exist
  }
  
  // Email validation
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show error message
  function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.parentElement.classList.add('has-error');
  }
  
  // Hide error message
  function hideError(element) {
    element.textContent = '';
    element.style.display = 'none';
    element.parentElement.classList.remove('has-error');
  }
  
  // Show success message
  function showSuccess() {
    form.style.display = 'none';
    successMessage.style.display = 'block';
  }
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Reset previous errors
    hideError(emailError);
    
    // Validate email
    if (!email) {
      showError(emailError, 'Email Address is required.');
      emailInput.focus();
      return;
    }
    
    if (!validateEmail(email)) {
      showError(emailError, 'Email Address is required.');
      emailInput.focus();
      return;
    }
    
    // Simulate form submission (replace with actual email service integration)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Signing up...';
    
    // Simulate API call delay
    setTimeout(() => {
      showSuccess();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
      // Reset form
      form.reset();
    }, 1000);
  });
  
  // Real-time validation
  emailInput.addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !validateEmail(email)) {
      showError(emailError, 'Email Address is required.');
    } else {
      hideError(emailError);
    }
  });
  
  emailInput.addEventListener('input', function() {
    if (emailError.style.display === 'block') {
      hideError(emailError);
    }
  });
});
