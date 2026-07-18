// Cart State Management
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadCart();
    }

    loadCart() {
        const saved = localStorage.getItem('alnasser_cart');
        if (saved) {
            try {
                const parsedItems = JSON.parse(saved);
                // Refresh item details from the source of truth (products array) to fix stale images/prices
                this.items = parsedItems.map(item => {
                    // Try to find the latest product data
                    const latestProduct = typeof products !== 'undefined' ? products.find(p => p.id === item.id) : null;
                    if (latestProduct) {
                        return { ...latestProduct, quantity: item.quantity };
                    }
                    return item;
                });
            } catch (e) {
                this.items = [];
            }
        }
    }

    saveCart() {
        localStorage.setItem('alnasser_cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(product, quantity = 1) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        this.saveCart();
        this.showToast();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartUI() {
        const countElements = document.querySelectorAll('.cart-count');
        countElements.forEach(el => {
            el.textContent = this.getItemCount();
            if(this.getItemCount() > 0) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });

        // Trigger custom event so other parts of UI (like cart modal) can update
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: this.items }));
    }

    showToast() {
        const lang = localStorage.getItem('appLang') || 'ar';
        const msg = lang === 'en' ? 'Item added to cart!' : 'تم إضافة المنتج إلى السلة!';
        
        let toast = document.getElementById('cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cart-toast';
            toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 z-50 font-bold';
            document.body.appendChild(toast);
        }
        
        toast.textContent = msg;
        toast.classList.remove('translate-y-20', 'opacity-0');
        
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    }
}

// Initialize globally
window.cart = new ShoppingCart();
document.addEventListener('DOMContentLoaded', () => {
    window.cart.updateCartUI();
});
