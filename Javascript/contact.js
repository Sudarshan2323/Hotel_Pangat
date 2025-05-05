document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        contactNo: document.getElementById("contactNo").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    try {
        const response = await fetch("contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
        if (result.success) {
            document.getElementById("contactForm").reset();
        }
    } catch (error) {
        alert("Error submitting form. Try again.");
        console.error(error);
    }
});
