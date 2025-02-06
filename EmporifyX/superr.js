// Cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log("Cart:", cart);
}

// Example: Adding a product to the cart
addToCart({ name: "Product 1", price: 19.99 });
