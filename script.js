document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {id: 1, name: "Product 1", price: 12.99},
        {id: 2, name: "Product 2", price: 29.99},
        {id: 3, name: "Product 3", price: 44.99},
    ]

    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const emptyCartMessage = document.getElementById("empty-cart");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product => { // Loop to dynamically add products to the page
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id = "${product.id}">Add to Cart</button>`
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {// Event listener to add products to cart by targetting the specific product using data-id
        if(e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    })

    function addToCart(value) { // Function to add products to cart
        cart.push(value);
        renderCart();
    }

    function renderCart () { // Function to render cart, display the total sum of cart and empty cart message toggle.
        cartItems.innerText = "";
        let totalPrice = 0;
        if(cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((items, index) => {
                totalPrice += items.price;
                const cartProduct = document.createElement("div");
                cartProduct.innerHTML = `
                ${items.name} - $${items.price.toFixed(2)}`
                cartItems.appendChild(cartProduct);
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
            })
        } else {
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent = "$0.00";
        }
    }

    checkOutBtn.addEventListener('click', () => { // Event listener to checkout and clear cart
        cart.length = 0;
        alert("Checkout Successful");
        renderCart();
        cartTotal.classList.add("hidden");
    })
});