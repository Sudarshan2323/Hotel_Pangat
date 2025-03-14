
document.addEventListener("DOMContentLoaded", function() {
    fetch("../php/fetch_product.php")
    .then(response => response.text())
    .then(data => {
        document.getElementById("productContainer").innerHTML = data;
    })
    .catch(error => console.error("Error loading products:", error));
});

// Search Function
function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        let productName = card.getAttribute("data-name");
        let productDescription = card.getAttribute("data-description");

        if (productName.includes(input) || productDescription.includes(input)) {
            card.style.display = "block"; // Show matching products
        } else {
            card.style.display = "none"; // Hide non-matching products
        }
    });
}

function addToCart(productId) {
    fetch("../php/add_to_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "product_id=" + productId
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "error") {
            alert(data.message); // Show login alert or error message
        } else {
            alert("Product added to cart!");
        }
    })
    .catch(error => console.error("Error adding to cart:", error));
}



