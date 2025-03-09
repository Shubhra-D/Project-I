import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded", () => {
    let products = []; // Store all products
    let filteredProducts = []; // Store filtered products
    let currentPage = 1;
    const itemsPerPage = 3;

    const container = document.getElementById("products-container");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const categoryFilter = document.getElementById("category-filter");
    const sortSelect = document.getElementById("sort-select");

    // Fetch and store products
    const fetchProducts = async () => {
        try {
            const res = await fetch(`${baseurl}products`);
            products = await res.json();
            filteredProducts = [...products]; // Initially, filtered products = all products
            renderProducts();
        } catch (err) {
            console.error(err);
            container.innerHTML = "Failed to load products. Please try again.";
        }
    };

    // Render products based on current page, filter & sorting
    const renderProducts = () => {
        container.innerHTML = "";
        let start = (currentPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        let paginatedItems = filteredProducts.slice(start, end);

        if (paginatedItems.length === 0) {
            container.innerHTML = "<p>No products available.</p>";
            return;
        }

        paginatedItems.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.discription}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <button class="buy-now" data-id="${product.id}">Buy Now</button>
                <button class="add-cart" data-id="${product.id}">Add To Cart</button>
                <button class="add-wish" data-id="${product.id}"><i class="fa-solid fa-heart"></i>Add To Wishlist</button>
            `;
            container.append(productCard);
        });

        updatePaginationButtons();
    };

    // Update pagination buttons
    const updatePaginationButtons = () => {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage * itemsPerPage >= filteredProducts.length;
    };

    // Pagination - Next & Previous Buttons
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage * itemsPerPage < filteredProducts.length) {
            currentPage++;
            renderProducts();
        }
    });

    // Filtering by Category
    categoryFilter.addEventListener("change", () => {
        let selectedCategory = categoryFilter.value;
        filteredProducts = selectedCategory
            ? products.filter((product) => product.category === selectedCategory)
            : [...products];

        currentPage = 1;
        renderProducts();
    });

    // Sorting by Price
    sortSelect.addEventListener("change", () => {
        let sortType = sortSelect.value;

        filteredProducts.sort((a, b) => {
            let priceA = parseFloat(a.price.replace("$", ""));
            let priceB = parseFloat(b.price.replace("$", ""));
            return sortType === "low-to-high" ? priceA - priceB : priceB - priceA;
        });

        currentPage = 1;
        renderProducts();
    });

    // Initial load
    fetchProducts();
});
