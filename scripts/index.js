import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded", () => {
    // Get modal and buttons
    const userModal = document.getElementById("user-modal");
    const userIcon = document.querySelector(".user");
    const closeUserModal = document.getElementById("close-user-modal");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("loginForm");
    

    // Open modal
    if (userIcon) {
        userIcon.addEventListener("click", (event) => {
            event.preventDefault();
            userModal.style.display = "block";
        });
    }

    // Close modal
    if (closeUserModal) {
        closeUserModal.addEventListener("click", () => {
            userModal.style.display = "none";
        });
    }

    // Close modal if clicking outside the content
    window.addEventListener("click", (event) => {
        if (event.target === userModal) {
            userModal.style.display = "none";
        }
    });



    // Handle Signup

    
    if (signupForm) {
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("username").value.trim();
            const email = document.getElementById("useremail").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!name || !email || !password) {
                alert("All fields are required!");
                return;
            }

            const newUser = { name, email, password };

            try {
                // Fetch existing users
                const response = await fetch(`${baseurl}users`);
                const users = await response.json();

                // Check if email already exists
                const userExists = users.some(user => user.email === email);
                if (userExists) {
                    alert("User already exists! Please log in.");
                    return;
                }

                // Save new user to db.json
                await fetch(`${baseurl}users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });

                alert("Signup successful! Redirecting to login...");
                window.location.href = "login.html"; // Redirect to login
            } catch (error) {
                console.error("Error signing up:", error);
                alert("An error occurred while signing up.");
            }
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                alert("Both fields are required!");
                return;
            }

            try {
                const response = await fetch(`${baseurl}users`);
                const users = await response.json();

                // Verify user credentials
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    alert(`Welcome, ${user.name}!`);
                    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user data
                    window.location.href = "index.html"; // Redirect to home page
                } else {
                    alert("Invalid credentials! Please try again.");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("An error occurred while logging in.");
            }
        });
    }


    
    //SEARCH FUNCTIONALITY
 const searchInput = document.querySelector(".search-bar");
 const searchButton = document.querySelector(".search");

 if (searchInput && searchButton) {
     searchButton.addEventListener("click", function () {
         const query = searchInput.value.trim();
         if (query) {
             console.log(`Searching for: ${query}`); // Debugging log
             window.location.href = `product.html?query=${encodeURIComponent(query)}`;
         }
     });

     searchInput.addEventListener("keypress", function (event) {
         if (event.key === "Enter") {
             searchButton.click();
         }
     });
 } else {
     console.log("Search elements not found!"); // Debugging log
 }        
   

});













 