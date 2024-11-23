# Password Strength Checker

This is a simple **Password Strength Checker** web application that evaluates the strength of a password based on certain criteria and provides feedback to the user in real time.

---

## Features
- **Real-time feedback**: The app evaluates the password strength as soon as the user enters the password.
- **Strength evaluation**: The password is evaluated based on its length, presence of uppercase letters, and numbers.
- **User-friendly feedback**: The app provides visual feedback with color coding:
  - **Red**: Weak password.
  - **Orange**: Medium strength password.
  - **Green**: Strong password.

---

## Technologies Used
- **HTML**: Provides the structure of the web page.
- **CSS**: Styles the page and highlights the strength feedback.
- **JavaScript**: Implements the logic for checking password strength and dynamically updating the feedback.

---

## How It Works
1. Enter a password in the input field.
2. Click the **"Check Strength"** button.
3. The app will evaluate the password and display feedback:
   - **Weak password**: If the password is shorter than 6 characters.
   - **Medium password**: If the password doesn't contain an uppercase letter or a number.
   - **Strong password**: If the password meets the criteria for strength.

---

## JavaScript Code Explanation

### `getPasswordStrength` Function

The `getPasswordStrength` function checks the password's strength based on the following rules:
- Password length must be at least 6 characters.
- Password must contain both uppercase letters and numbers to be considered strong.

```javascript
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
