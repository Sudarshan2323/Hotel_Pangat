function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Price: ${item.price}</p>
            </div>
            <button onclick='console.log(${item.name})' >Delete Cart</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

function goBack() {
    window.history.back();
}

const delcart=(Index)=>{
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(Index, 1); 
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart(); 
}

window.onload = displayCart;
