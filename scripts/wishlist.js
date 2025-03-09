document.addEventListener("DOMContentLoaded", () => {
  const wishlistContainer = document.getElementById("wishlist-cont");

  // Function to load wishlist from localStorage
  const loadWishlist = () => {
    wishlistContainer.innerHTML = ""; // Clear previous content
    let wishlistItems = [];

    // Retrieve all wishlist items from localStorage
    for (let key in localStorage) {
      if (key.startsWith("wishlist-")) {
        let product = JSON.parse(localStorage.getItem(key));
        wishlistItems.push(product);
      }
    }

    if (wishlistItems.length === 0) {
      wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }

    // Display wishlist items
    wishlistItems.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "wish-card"
      itemElement.classList.add("wishlist-item");
      itemElement.innerHTML = `
              <img src="${item.image}" alt="${item.name}" class="wishlist-image">
              <h3>${item.name}</h3>
              <p>${item.discription}</p>
              <p>Price: $${item.price}</p>
              <button class="add-to-cart" data-id="${item.id}"> Add Cart</button>
              <button class="buy-now" data-id="${item.id}">Buy Now</button>
              <button class="remove-wish" data-id="${item.id}"><i class="fa-regular fa-trash-can"></i>Remove</button>
          `;
      wishlistContainer.appendChild(itemElement);
    });
  };

  // Function to remove item from wishlist
  wishlistContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-wish")) {
      const productId = e.target.dataset.id;
      localStorage.removeItem(`wishlist-${productId}`);
      loadWishlist(); // Refresh the wishlist display
    }
    //buying logic
    if (e.target.classList.contains("buy-now")) {
      const product = JSON.parse(localStorage.getItem(`wishlist-${productId}`));
      const productId = e.target.dataset.id; //defining the productId

      if (product) {
        // Store the product in localStorage for checkout
        localStorage.setItem("checkout-product", JSON.stringify(product));

        // Redirect to checkout page (modify URL as needed)
        window.location.href = "checkout.html";
      }
    }
    //Adding to the cart logic
    if (e.target.classList.contains("add-to-cart")) {
        const productId = e.target.dataset.id;
        const product = JSON.parse(localStorage.getItem(`wishlist-${productId}`));
    
        if (product) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            // Check if the item is already in the cart
            if (!cart.some((item) => item.id === product.id)) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Item added to cart!");
            } else {
                alert("Item is already in your cart.");
            }
        }
    }
    
  });

  // Load wishlist when page loads
  loadWishlist();
});
