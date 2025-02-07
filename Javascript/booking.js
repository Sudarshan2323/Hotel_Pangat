document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');

    // Optional: Log the reservation details to the console
    console.log('Reservation Details:');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Number of Guests:', guests);

    // Optional: Clear the form after submission
    document.getElementById('reservationForm').reset();
});