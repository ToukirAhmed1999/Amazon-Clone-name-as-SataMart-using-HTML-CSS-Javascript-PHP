 // Cart data
 let cart = [];
 let totalPrice = 0;

 // Function to add a product to the cart
 function addToCart(productName, price) {
     const existingProduct = cart.find(item => item.name === productName);

     if (existingProduct) {
         existingProduct.quantity += 1;
     } else {
         cart.push({ name: productName, price: price, quantity: 1 });
     }

     totalPrice += price;
     updateCartUI();
     updateProductUI(productName);
     updateTotal();
 }

 // Function to update the quantity of a product in the cart
 function updateQuantity(productName, change) {
     const product = cart.find(item => item.name === productName);

     if (product) {
         // Ensure the quantity doesn't go below 0
         if (product.quantity + change >= 0) {
             product.quantity += change;
             totalPrice += change * product.price;

             // Remove the product if the quantity becomes zero
             if (product.quantity === 0) {
                 const productIndex = cart.indexOf(product);
                 if (productIndex !== -1) {
                     cart.splice(productIndex, 1);
                 }
             }

             updateCartUI();
             updateTotal()
         }
     }
 }

 // Function to update the cart UI
 function updateCartUI() {
     const cartListElement = document.getElementById('cart-list');
     const totalPriceElement = document.getElementById('total-price');
     const cartCountElement = document.getElementById('cart-count');

     cartListElement.innerHTML = '';

     cart.forEach((item, index) => {
         const listItem = document.createElement('li');
         listItem.innerHTML = `
             <span>${item.name} - $${item.price} - Quantity: ${item.quantity}</span>
             <div class="cart-item-buttons">
                 <button onclick="updateQuantity('${item.name}', 1)">+</button>
                 <button onclick="updateQuantity('${item.name}', -1)">-</button>
             </div>
         `;
         cartListElement.appendChild(listItem);
     });

     totalPriceElement.textContent = `Total: $${totalPrice}`;
     cartCountElement.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
 }

 // Function to update the UI for a specific product
 function updateProductUI(productName) {
     const productQuantityElement = document.getElementById(`quantity${productName.replace(/\s+/g, '')}`);
     const product = cart.find(item => item.name === productName);

     if (productQuantityElement && product) {
         productQuantityElement.style.display = 'block';
         productQuantityElement.textContent = product.quantity;
     }
 }

 // Function to toggle the cart visibility
 function toggleCart() {
     const cartContainer = document.getElementById('cart-container');
     const isOpen = cartContainer.classList.contains('visible');

     if (isOpen) {
         cartContainer.classList.remove('visible');
     } else {
         cartContainer.classList.add('visible');
     }
 }

 // Function to handle checkout
 function checkout() {
     // Implement your checkout logic here
     alert('Checkout functionality not implemented yet!');
 }
 /****checkout */
 const checkoutButton = document.querySelector('.checkout-button');
 const checkoutSection = document.querySelector('.checkout-section');
 const subtotalEl = document.getElementById('subtotal');
 const deliveryChargeEl = document.getElementById('delivery-charge');
 const totalEl = document.getElementById('total');
 const addressForm = document.getElementById('address-form');
 const placeOrderButton = document.querySelector('.place-order');
 const cancelButton = document.querySelector('.cancel-button');
 
 // Hide checkout section initially
 checkoutSection.classList.add('hidden');
 
 // Show checkout section on button click
 checkoutButton.addEventListener('click', function() {
   checkoutSection.classList.remove('hidden');
   addressForm.elements[0].focus(); // Focus first input field
 });
 
 // Update total price based on sample logic (modify as needed)
 function updateTotal() {
   const subtotal = totalPrice; // Replace with actual subtotal calculation
   const deliveryCharge = 15; // Replace with your delivery charge logic
   subtotalEl.textContent = subtotal;
   deliveryChargeEl.textContent = deliveryCharge;
   totalEl.textContent = totalPrice + deliveryCharge;
 }
 
 // Update total initially and enable place order button only after form submission
 updateTotal();
 addressForm.addEventListener('submit', function(e) {
   e.preventDefault(); // Prevent form submission
 
   // Implement your actual form submission logic here, potentially sending data to a server
   // ...
 
   // Disable place order button and show success message after successful submission
   placeOrderButton.disabled = true;
 
   // Add your success message here
   // ...
 });
 
 // Hide checkout section on cancel button click
 cancelButton.addEventListener('click', function() {
   checkoutSection.classList.add('hidden');
   placeOrderButton.disabled = true; // Reset button state
 
   // Clear any form data if needed
   // ...
 });
 
 // Add any additional event listeners for form validation or other functionalities

