document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Form submitted successfully
                alert('Thank you for your message. We will get back to you soon!');
                form.reset(); // This clears all form fields
            } else {
                // Handle errors
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Oops! There was a problem submitting your form. Please try again.');
        });
    });
});