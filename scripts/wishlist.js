
import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded",()=>{
    const addToWishlistButton = document.getElementById("add-wish");
addToWishlistButton.addEventListener('click', async () => {
    const productId = addToWishlistButton.dataset.productId;
  
    try {
      const response = await fetch(`${baseurl}/products/${productId}`, {
        method: 'GET',
        headers: {
          "content-type": "application/json"
        }
      });
  
      if (response.ok) {
        const product = await response.json();
        console.log('Product retrieved successfully!');
  
        // Create a new wishlist item element
        const wishlistItemElement = document.createElement('div');
        wishlistItemElement.innerHTML = `
              <img src="${products.image}" alt="${products.name}" class="product-image">
              <h3>${products.name}</h3>
              <p>${products.discription}</p>
              <p>Price: $${products.price}</p>
              <p>Stock: ${products.stock}</p>
              <button class="buy-now" data-id="${products.id}">Buy Now</button>
              <button class="add-cart" data-id="${products.id}">Add To Cart</button>
              
                  `;
  
        // Add the wishlist item to the container
        wishlistContainer.appendChild(wishlistItemElement);
      } else {
        console.error('Error retrieving product:', response.status);
      }
    } catch (error) {
      console.error('Error retrieving product:', error);
    }
  });
  
  
  
  
})

async function fetchProducts() {
    try {
      const response = await fetch(`${baseurl}/products`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const products = await response.json();
      console.log(products); // Display products in console
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }
  
  fetchProducts();
    

  //wishlist button working
  async function addToWishlist(productId){
    const res = await fetch(`${baseurl}/products`,{
      method:"POST",
      headers:{
        "content-type":"application/JSON"
      },
      body:JSON.stringify({productId})
    });
    const data = await res.json();
    if(res.ok){
      alert("Added to Wishlist")
    }else{
      alert("err adding product")
    }
  }
  