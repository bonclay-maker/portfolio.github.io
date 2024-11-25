document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
        const form = e.target;
        const formData = new FormData(form);
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Clear the form
            form.reset();
            alert('Thank you for your message!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
});