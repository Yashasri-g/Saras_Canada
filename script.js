document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Redirect to the careers page on button click
    const careersBtn = document.getElementById("careersBtn");
    if (careersBtn) {
        careersBtn.addEventListener("click", function() {
            // Redirect to the careers page
            window.location.href = 'careers.html'; // Change to the actual URL of your careers page
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && message) {
                // Sending data to a dummy server endpoint (this would be replaced with an actual server endpoint)
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Form submitted successfully!');
                    contactForm.reset();
                })
                .catch(error => {
                    alert('An error occurred while submitting the form.');
                    console.error('Error:', error);
                });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
