

document.addEventListener("DOMContentLoaded", function () {
    loadCart();
});

function loadCart() {
    fetch("../php/fetch_cart.php")
        .then(response => response.json())
        .then(data => {
            // console.log("Cart Data:", data); // Debugging output

            let cartItems = document.getElementById("cartItems");
            cartItems.innerHTML = "";

            if (data.error) {
                cartItems.innerHTML = `<p style="color: red;">${data.error}</p>`;
                return;
            }

            if (data.message) {
                cartItems.innerHTML = `<p>${data.message}</p>`;
                return;
            }

            let subtotal = 0;

            data.forEach(item => {
                let itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                cartItems.innerHTML += `
                    <div class="cart-item">
                        <img src="../Images/${item.image}" onerror="this.src='../Images/default.png'" alt="${item.name}">
                        <div class="item-details">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p>Price: ${item.price}</p>
                            <div class="quantity-controls">
                                <button onclick="updateQuantity(${item.cart_id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${item.cart_id}, ${item.quantity + 1})">+</button>
                                <button onclick="removeFromCart(${item.cart_id})" class="remove-btn"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        <p class="item-total">Rs.${itemTotal}</p>
                    </div>
                `;
            });

            let tax = Number(subtotal) * 0.08;
            document.getElementById("tax").innerText = `${tax.toFixed(0)}`;
            document.getElementById("subtotal").innerText = `${subtotal}`;
            let shipping = subtotal > 0 ? 50 : 0;
            document.getElementById("shipping").innerText = `${shipping}`;
            document.getElementById("total").innerText = `${(subtotal + tax + shipping).toFixed(0)}`;
        })
        .catch(error => console.error("Error loading cart:", error));
}

// setInterval(()=>{
//     loadCart()
// },1000)
function updateQuantity(cartId, newQuantity) {
    if (newQuantity < 1) return; 

    fetch("../php/update_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart_id: cartId, quantity: newQuantity })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            setInterval(()=>{
                loadCart();
            },100)
        } else {
            alert("Failed to update quantity!");
        }
    })
    .catch(error => console.error("Error updating quantity:", error));
}

// Remove item from cart
function removeFromCart(cartId) {
    fetch("../php/remove_from_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart_id: cartId })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            setInterval(()=>{
                loadCart();
            },1000)
        } else {
            alert("Failed to remove item!");
        }
    })
    .catch(error => console.error("Error removing item:", error));
}

const checkout=()=>{
    window.location.href = '../php/checkout.php';
}