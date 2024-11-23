'use strict';

function getPasswordStrength(password) {
    if (password.length === 0) {
      return { message: 'Please enter a password.', color: 'White' };
    } else if (password.length < 6) {
      return { message: 'Weak password! Try making it longer.', color: 'red' };
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return { message: 'Medium password! Add uppercase letters or numbers.', color: 'orange' };
    } else {
      return { message: 'Strong password!', color: 'green' };
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const strengthElement = document.getElementById('strength');
    
    const result = getPasswordStrength(password);
    strengthElement.innerText = result.message;
    strengthElement.style.color = result.color;
}