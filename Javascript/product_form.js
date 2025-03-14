document.getElementById("productForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value;

    if (name === "" || price <= 0) {
        event.preventDefault();
        document.getElementById("message").innerText = "Please fill in all fields correctly!";
    }
});
