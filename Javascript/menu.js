
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

// function addToCart(productId) {
//     fetch("../php/add_to_cart.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: "product_id=" + productId
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === "error") {
//             alert(data.message); // Show login alert or error message
//         } else {
//             alert("Product added to cart!");
//         }
//     })
//     .catch(error => console.error("Error adding to cart:", error));
// }



// function addToCart(productId) {
//     fetch("../php/add_to_cart.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: "product_id=" + productId
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === "not_logged_in") {
//             // Open login popup
//             openLoginPopup(data.message);
//         } else if (data.status === "success") {
//             // Show success popup
//             showPopup(data.message, "success");
//         } else {
//             // Show error popup
//             showPopup(data.message, "error");
//         }
//     })
//     .catch(error => console.error("Error adding to cart:", error));
// }
// Function to load and update cart count on navbar
function updateCartCount() {
    fetch('../php/get_cart_count.php')
        .then(response => response.json())
        .then(data => {
            console.log("Cart count:", data.count);
            document.getElementById('cartCount').innerText = `Cart(${data.count})`;
        })
        .catch(error => console.error("Error loading cart count:", error));
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", updateCartCount);

// Update cart count when a product is added to the cart
function addToCart(productId) {
    fetch("../php/add_to_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "product_id=" + productId
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            showPopup(data.message, "success");
            updateCartCount(); // Refresh cart count after adding product
        } else if (data.status === "not_logged_in") {
            openLoginPopup(data.message);
        } else {
            showPopup(data.message, "error");
        }
    })
    .catch(error => console.error("Error adding to cart:", error));
}

function openLoginPopup(message) {
    const popup = document.getElementById("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button onclick="redirectToLogin()">Login</button>
            <button onclick="closePopup()">Close</button>
        </div>
    `;
    popup.style.display = "block";
}

function showPopup(message, type) {
    const popup = document.getElementById("popup");
    popup.innerHTML = `
        <div class="popup-content ${type}">
            <p>${message}</p>
            <button onclick="closePopup()">Close</button>
        </div>
    `;
    popup.style.display = "block";
}

function redirectToLogin() {
    window.location.href = "../index/index.html"; // Redirect to login page
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
