// This looks for the button we made in the HTML
const button = document.getElementById('surpriseBtn');

// This tells the browser what to do when the button is clicked
button.addEventListener('click', function() {
    alert("Surprise! You're amazing. Have the best birthday!");
    // If you wanted to redirect to a new page instead of an alert, you'd use:
    // window.location.href = "nextpage.html";
});