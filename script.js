// Function to handle form submission and display the thank you message
function submitForm() {
    // Fetch the input values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display the thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";
    thankYouMessage.innerHTML = `Thank you, ${name}, for your message! I'll respond to your email (${email}) shortly.`;

    // Clear the form fields after submission
    document.getElementById("contactForm").reset();
}
