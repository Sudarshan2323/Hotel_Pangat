// Load section dynamically
function loadSection(section) {
    fetch(`fetch_${section}.php`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error("Error loading section:", error));
}

// Edit Product
function editProduct(id, name, description, price, category) {
    const newName = prompt("Enter new name:", name);
    const newDescription = prompt("Enter new description:", description);
    const newPrice = prompt("Enter new price:", price);
    const newCategory = prompt("Enter new category:", category);

    if (newName && newDescription && newPrice && newCategory) {
        fetch('update_product.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `product_id=${id}&name=${newName}&description=${newDescription}&price=${newPrice}&category=${newCategory}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadSection('products'); // Reload products
        });
    }
}

// Delete Product
function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        fetch('delete_product.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `product_id=${id}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadSection('products'); // Reload products
        });
    }
}


function updateOrderStatus(orderId, status) {
    fetch('update_order_status.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `order_id=${orderId}&status=${status}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadSection('orders'); // Reload orders
    })
    .catch(error => console.error('Error updating status:', error));
}






















document.addEventListener("DOMContentLoaded", function () {
    loadOrders();
});

function loadOrders() {
    fetch("./fetch_orders.php")
        .then(response => response.json())
        .then(data => {
            let ordersTable = document.querySelector("#ordersTable tbody");
            ordersTable.innerHTML = "";

            if (data.length === 0) {
                ordersTable.innerHTML = `<tr><td colspan="7">No orders found.</td></tr>`;
                return;
            }

            data.forEach(order => {
                let row = `
                    <tr>
                        <td>${order.order_id}</td>
                        <td>${order.name}</td>
                        <td>${order.email}</td>
                        <td>${order.phone ? order.phone : 'N/A'}</td>
                        <td>Rs. ${parseFloat(order.total_price).toFixed(2)}</td>
                        <td>
                            <select onchange="updateOrderStatus(${order.order_id}, this.value)">
                                <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                                <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                                <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
                                <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                            </select>
                        </td>
                        <td>${order.order_date}</td>
                    </tr>
                `;
                ordersTable.innerHTML += row;
            });
        })
        .catch(error => console.error("Error loading orders:", error));
}

// Function to update order status
function updateOrderStatus(orderId, newStatus) {
    fetch('./update_order_status.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            order_id: orderId,
            status: newStatus
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Order status updated!");
            loadOrders(); // Reload orders after update
        } else {
            alert("Failed to update order status.");
        }
    })
    .catch(error => console.error('Error updating status:', error));
}













document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

function loadProducts() {
    fetch('./fetch_products.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('productContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading products:', error));
}

function openProductForm(id = '', name = '', description = '', price = '', category = '') {
    document.getElementById('productId').value = id;
    document.getElementById('productName').value = name;
    document.getElementById('productDescription').value = description;
    document.getElementById('productPrice').value = price;
    document.getElementById('productCategory').value = category;

    document.getElementById('productFormPopup').style.display = 'block';
}

function closeProductForm() {
    document.getElementById('productFormPopup').style.display = 'none';
}

function submitProduct(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', document.getElementById('productId').value);
    formData.append('name', document.getElementById('productName').value);
    formData.append('description', document.getElementById('productDescription').value);
    formData.append('price', document.getElementById('productPrice').value);
    formData.append('category', document.getElementById('productCategory').value);
    formData.append('image', document.getElementById('productImage').files[0]);

    fetch('./add_update_product.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(() => {
        loadProducts();
        closeProductForm();
    })
    .catch(error => console.error('Error saving product:', error));
}

function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        fetch(`./delete_product.php?id=${id}`, { method: 'GET' })
            .then(() => loadProducts())
            .catch(error => console.error('Error deleting product:', error));
    }
}



document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
});

function loadUsers() {
    fetch('./fetch_users.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('userContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading users:', error));
}


document.addEventListener("DOMContentLoaded", () => {
    loadBookings();
});

function loadBookings() {
    fetch('./fetch_bookings.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bookingContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading bookings:', error));
}

// Update Booking Status
function updateBookingStatus(bookingId, status) {
    fetch('./update_booking_status.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `booking_id=${bookingId}&status=${status}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadBookings(); // Reload bookings after update
    })
    .catch(error => console.error('Error updating booking status:', error));
}

// Delete Booking
function deleteBooking(bookingId) {
    if (confirm('Are you sure you want to delete this booking?')) {
        fetch('./delete_booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `booking_id=${bookingId}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadBookings(); // Reload bookings after deletion
        })
        .catch(error => console.error('Error deleting booking:', error));
    }
}
