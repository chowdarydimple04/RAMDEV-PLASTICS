
// RAMDEV PLASTICS WEBSITE JAVASCRIPT

// Welcome message
console.log("Welcome to Ramdev Plastics!");

// Product category messages
function showMessage(category) {
    alert("Thank you for exploring our " + category + " collection!");
}

// WhatsApp contact
function openWhatsApp() {
    window.open(
        "https://wa.me/917675908016",
        "_blank"
    );
}

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation: " + this.textContent);
    });
});

// Welcome notification
window.addEventListener('load', function() {
    console.log("Ramdev Plastics website loaded successfully!");
});
