const menuItems = [
    { name: "Veg Biryani", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/veg_biryani.jpg"},
    { name: "Paneer Tikka Masala", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Paneer_tikka_masala.jpg"},
    { name: "Dal Makhani", type: "veg",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Dal_makhani.jpg"},
    { name: "Chicken Curry", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Chicken_curry.jpg"},
    { name: "Butter Chicken", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Butter_chicken.jpg"},
    { name: "Chicken Tikka", type: "chicken",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Chicken_tikka.jpg"},
    { name: "Mutton Rogan Josh", type: "mutton",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Mutton_Rogan_josh.jpg"},
    { name: "Mutton Biryani", type: "mutton",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Mutton_biryani.jpg"},
    { name: "Fish Fry", type: "fish",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Fish_fry.jpg"},
    { name: "Fish Curry", type: "fish",desc:"The delicoius food for a healthy life to live long" ,price:"999", pic : "../Images/Fish_curry.jpg"}
];

function displayMenuItems(items) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = " ";

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <div class="menu-card" onclick="showDetails(this)">
                <img src=${item.pic}/>
              <div class="menu-content">
               <h3>${item.name}</h3>
               <p class=desc > ${item.desc}</p> 
               <h4 class="price">Rs.${item.price} </h4>
             </div>
            </div>
            <!--    <div class="bg-white rounded-lg shadow-md overflow-hidden">
     <img alt="A plate of pan-seared scallops with cauliflower purée" class="w-full h-48 object-cover" height="400" src=${item.pic} width="600"/>
     <div class="p-4">
      <div class="flex justify-between items-center mb-2">
       <h3 class="text-xl font-bold">
        ${item.name}
       </h3>
       <h4 class="text-lg font-semibold">
        ${item.price}
       </h4>
      </div>
      <p class="text-gray-600 mb-4">
         ${item.desc}
      </p>
      <div class="flex justify-between items-center">

       <button class="bg-black text-white px-4 py-2 rounded" onclick="showDetails(this)">
        Add to Cart
       </button>
      </div>
     </div>
    </div>--> `;
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


 
function closeDetails() {
    document.getElementById('cardDetails').style.display = 'none';
}










function addToCart() {
    const productName = document.getElementById('productName').innerText;
    const productImage = document.getElementById('productImage').src;
    const price = document.getElementById('price').innerText;
    const Desc = document.getElementById('desc').innerText;


    const product = {
        name: productName,
        image: productImage,
        price: price,
        desc:Desc
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'cart.html'; 
}





