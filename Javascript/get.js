document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Here, you would typically handle form submission, like sending data to a server
    // or displaying a thank you message.

    // For now, let's just log the form data to the console:
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
 event.target.reset(); 
});


// Add event listener for the reset button
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
});