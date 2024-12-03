document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".new-product-cart-btn");
    
    cartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        
        const productBox = button.closest(".new-product-box");
        const title = productBox.querySelector(".new-product-title").textContent;
        const price = productBox.querySelector("span").textContent;
        const image = productBox.querySelector("img").src;
  
        // Create a product object
        const product = { title, price, image };
  
        // Retrieve existing cart data from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
  
        // Save updated cart data back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
  
        alert(`${title} has been added to your cart!`);
      });
    });
  });
  