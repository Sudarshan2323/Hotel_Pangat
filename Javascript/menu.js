const menuItems = [
    { name: "Veg Biryani", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t1.jpg"},
    { name: "Paneer Tikka Masala", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Dal Makhani", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/fish.jpg"},
    { name: "Chicken Curry", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/fish1.jpg"},
    { name: "Butter Chicken", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Chicken Tikka", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Mutton Rogan Josh", type: "mutton",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Mutton Biryani", type: "mutton",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Fish Fry", type: "fish",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"},
    { name: "Fish Curry", type: "fish",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/about_t2.jpg"}
];

function displayMenuItems(items) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = "";

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
                <div class="menu-card" onclick="showDetails(this)">
                <img src=${item.pic}/>
              <div class="menu-content">
               <h3>${item.name}</h3>
               <!-- <p>Atlantic salmon with lemon butter </p> -->
               <p class="price">$${item.price} </p>
             </div>
            </div>`;
        menuList.appendChild(menuItem);
    });
}

function filterItems(type) {
    let filteredItems = menuItems;

    if (type !== 'all') {
        filteredItems = menuItems.filter(item => item.type === type);
    }

    displayMenuItems(filteredItems);
}

function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchInput));
    displayMenuItems(filteredItems);
}

displayMenuItems(menuItems);













function addToCart() {
    const productName = document.getElementById('productName').innerText;
    const productImage = document.getElementById('productImage').src;
    const price = document.getElementById('price').innerText;

    const product = {
        name: productName,
        image: productImage,
        price: price
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'cart.html'; 
}

function closeDetails() {
    document.getElementById('cardDetails').style.display = 'none';
}