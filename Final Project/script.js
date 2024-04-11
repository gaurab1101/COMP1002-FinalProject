document.addEventListener("DOMContentLoaded", function() {
    // Add header
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">
            <h1>Minolta X-700</h1>
        </div>
        <div class="nav-toggle">
            <span>&#9776;</span>
        </div>
        <ul class="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="product.html">Products</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    `;
    document.body.prepend(header);

    // Add footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2024 Minolta X-700. All rights reserved.</p>
    `;
    document.body.appendChild(footer);

    // Toggle navigation menu for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // JavaScript for product page buy button clicks
    function addToCart(price, quantity) {
        const total = price * quantity;
        alert(`Added ${quantity} Minolta X-700 to cart! Total: $${total}`);
    }

    document.getElementById("buy-btn-black").addEventListener("click", function() {
        const quantity = parseInt(document.getElementById("quantity-black").value);
        addToCart(249.99, quantity);
    });

    // Repeat similar event listeners for other products

    console.log("Header and footer added successfully.");
});
