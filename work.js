// Function to check if the user has accepted cookies
const button = document.getElementById("reshow");
button.addEventListener('click', () => {
    showCookiePopup()
})



function checkCookieConsent() {
    return localStorage.getItem("cookieConsent") === "true";
  }
  
  // Function to show the cookie popup
  function showCookiePopup() {
    const popup = document.getElementById("hidden-cookies");
    popup.style.display = "flex";
  }
  
  // Function to hide the cookie popup and save the consent
  function handleCookieChoice(choice) {
    const message = document.getElementById("cookie-choice")
    // Save consent if user accepted
    if (choice === "accept") {
        message.textContent = "You accepted cookies 🍪";
      localStorage.setItem("cookieConsent", "true");
    }

    else {  message.textContent = "You declined cookies ❌";}
  
    // Hide the popup
    const popup = document.getElementById("hidden-cookies");
    popup.style.display = "none";
    
  }
  
  
  // Event listener for when the user clicks "Accept"
  document
  .getElementById("accept-button")
  .addEventListener("click", () => handleCookieChoice("accept"));

document
  .getElementById("decline-button")
  .addEventListener("click", () => handleCookieChoice("decline"));
  
  // Check if the user has already accepted cookies, and show the popup if not
  if (!checkCookieConsent()) {
    setTimeout(showCookiePopup, 50);
  }

  
  