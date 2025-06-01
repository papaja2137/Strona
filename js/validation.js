document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Email validation
            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value.trim();
            const emailError = emailInput.nextElementSibling; // Assuming error message is next sibling
            if (emailError && emailError.classList.contains('error-message')) {
                emailError.remove();
            }

            if (emailValue === '') {
                displayError(emailInput, 'E-mail jest wymagany.');
                isValid = false;
            } else if (!isValidEmail(emailValue)) {
                displayError(emailInput, 'Proszę podać poprawny adres e-mail.');
                isValid = false;
            }

            // Password validation
            const passwordInput = document.getElementById('password');
            const passwordValue = passwordInput.value.trim();
            const passwordError = passwordInput.nextElementSibling;
            if (passwordError && passwordError.classList.contains('error-message')) {
                passwordError.remove();
            }

            if (passwordValue === '') {
                displayError(passwordInput, 'Hasło jest wymagane.');
                isValid = false;
            }

            // PIN validation
            const pinInput = document.getElementById('pin');
            const pinValue = pinInput.value.trim();
            const pinError = pinInput.nextElementSibling;
            if (pinError && pinError.classList.contains('error-message')) {
                pinError.remove();
            }

            if (pinValue === '') {
                displayError(pinInput, 'PIN karty jest wymagany.');
                isValid = false;
            } else if (!/^[0-9]{4}$/.test(pinValue)) { // Assuming a 4-digit PIN
                displayError(pinInput, 'PIN musi składać się z 4 cyfr.');
                isValid = false;
            }

            // Card Number validation
            const cardNumberInput = document.getElementById('cardNumber');
            const cardNumberValue = cardNumberInput.value.trim();
            const cardNumberError = cardNumberInput.nextElementSibling;
            if (cardNumberError && cardNumberError.classList.contains('error-message')) {
                cardNumberError.remove();
            }

            if (cardNumberValue === '') {
                displayError(cardNumberInput, 'Numer karty jest wymagany.');
                isValid = false;
            } else if (!/^[0-9]{16}$/.test(cardNumberValue)) {
                displayError(cardNumberInput, 'Numer karty musi składać się z 16 cyfr.');
                isValid = false;
            }

            if (isValid) {
                // In a real application, you would send data to a backend here.
                // For this project, we'll simulate success and redirect.
                alert('Płatność została przetworzona! Przekierowanie do strony potwierdzenia.');
                window.location.href = 'confirmation.html';
            }
        });
    }

    function isValidEmail(email) {
        // Basic email regex validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function displayError(inputElement, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    }
}); 