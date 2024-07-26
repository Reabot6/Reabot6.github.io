document.addEventListener("DOMContentLoaded", () => {
    const createAccountForm = document.getElementById('createAccountForm');
    const createAccountMessage = document.getElementById('createAccountMessage');

    createAccountForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newUsername = document.getElementById('newUsername').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();

        if (newUsername === '' || newPassword === '') {
            createAccountMessage.textContent = 'Username and password cannot be empty.';
            createAccountMessage.style.color = 'red';
            createAccountMessage.style.display = 'block';
            return;
        }

        // Save new user credentials in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[newUsername]) {
            createAccountMessage.textContent = 'Username already exists. Please choose a different username.';
            createAccountMessage.style.color = 'red';
            createAccountMessage.style.display = 'block';
        } else {
            users[newUsername] = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            createAccountMessage.textContent = 'Account created successfully! You can now log in.';
            createAccountMessage.style.color = 'green';
            createAccountMessage.style.display = 'block';
            window.location.href = 'lasu-in.html';
        }
    });
});
