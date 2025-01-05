import { baseurl } from "./baseurl.js";



document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch and display products from the backend on Glitch
    const displayProducts = async () => {
      const container = document.getElementById("products-container");
      try {
        const res = await fetch(`${baseurl}/products`);
        const products = await res.json();
        if (products && products.length > 0) {
          products.forEach((products) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
              <img src="${products.image}" alt="${products.name}" class="product-image">
              <h3>${products.name}</h3>
              <p>${products.discription}</p>
              <p>Price: $${products.price}</p>
              <p>Stock: ${products.stock}</p>
              <button class="buy-now" data-id="${products.id}">Buy Now</button>
              <button class="add-cart" data-id="${products.id}">Add To Cart</button>
              <button id="add-wish" data-id="${products.id}">Add To Wishlist</button>
              `;
            container.append(productCard);
          });
        } else {
          container.innerHTML = "<p>No products available.</p>";
        }
      } catch (err) {
        console.log( err);
        const container = document.getElementById("products-container");
        container.innerHTML = "Failed to load products. Please try again later";
      }
    };
  
    // Load products when the page is ready
    displayProducts();
  });



  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");
  
    // Add delegated event listener to container element
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-cart")) {
        const productId = ("1");
        console.log(`Button clicked for product ${productId}`);
  
        // Store product ID in LocalStorage
        localStorage.setItem(`product-${productId}`, productId);
        console.log(`Product ${productId} added to LocalStorage`);
  
        // Fetch product data and store it in LocalStorage
        fetch(`${baseurl}/products/${productId}`)
          .then((response) => response.json())
          .then((product) => {
            localStorage.setItem(`product-${productId}`, JSON.stringify(product));
          });
      }
    });
  });
  