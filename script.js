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
    const totalPrice = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id = "${product.id}">Add to Cart</button>`
        productList.appendChild(productDiv);
    })
});