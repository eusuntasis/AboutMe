// Scroll to 'About Me' section when "Learn More" button is clicked
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show a thank you message after form submission
    document.getElementById('formMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
});

