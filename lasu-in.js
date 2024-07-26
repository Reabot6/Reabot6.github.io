// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.getElementById('loginForm');
//     const errorMessage = document.getElementById('errorMessage');
//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;
//         if ((username === 'Reabot6' && password === '220194104') || (username === 'Cyprain' && password === '220194092')) {
//             localStorage.setItem('authenticated', 'true');
//             alert('Welcome ' + username)
//             window.location.href ='lasu.html';
        
//         } else {
//             errorMessage.textContent = 'Invalid username or password.';
//             errorMessage.style.display = 'block';
//         }
//     });     
// });
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Username and password cannot be empty.';
            errorMessage.style.display = 'block';
            return;
        }

        // Check user credentials
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username] && users[username] === password) {
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('username', username);
            window.location.href = 'lasu.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });

    // if (localStorage.getItem('authenticated') !== 'true') {
    //     window.location.href = 'lasu.html';
    // }
});
