// Function to show the registration form
function showRegistrationForm() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('registration').style.display = 'block';
}

// Function to show subscription form based on selected option
function showSubscriptionForm(option) {
    document.getElementById('subscription-options').style.display = 'none';
    document.getElementById(option + '-subscription-form').style.display = 'block';
}

// Registration form submission handling
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code to handle registration data here
    // For simplicity, let's just hide the registration form and show subscription options
    document.getElementById('registration').style.display = 'none';
    document.getElementById('subscription-options').style.display = 'flex';
});
