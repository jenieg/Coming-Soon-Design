document.getElementById("submitBtn").addEventListener("click", function() {
    
    
    const email = document.getElementById("emailInput").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        event.preventDefault();
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = "Please enter valid email";
        errorMessageElement.style.display = "block";
    } else {
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = "";
        errorMessageElement.style.display = "none";
    }
});