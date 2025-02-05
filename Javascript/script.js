document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const adults = document.getElementById('adults').value;

    // You can now do something with these values, like:
    // 1. Send them to a server using fetch or XMLHttpRequest
    // 2. Store them in localStorage
    // 3. Display a confirmation message

    console.log({ name, email, phone, bookingDate, bookingTime, adults });

    // For now, let's just display an alert
    alert('Booking details submitted (check console for values)!');

    // Reset the form (optional)
    // this.reset(); 
});