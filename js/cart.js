// cart.js

// Cart class for managing shopping cart using localStorage
class Cart {
    constructor() {
        this.cart = this.getCart();
    }

    // Retrieve cart from localStorage
    getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Add item to cart
    addItem(item) {
        this.cart.push(item);
        this.saveCart();
    }

    // Remove item from cart
    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Clear the cart
    clearCart() {
        this.cart = [];
        localStorage.removeItem('cart');
    }

    // Get all items in the cart
    getItems() {
        return this.cart;
    }

    // Get total items in the cart
    getTotalItems() {
        return this.cart.length;
    }
}

// Usage Example
const myCart = new Cart();
// myCart.addItem({id: 1, name: 'Item 1', price: 10});
// myCart.removeItem(1);

