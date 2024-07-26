document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if ((username === 'Reabot6' && password === '220194104') || (username === 'Cyprain' && password === '220194092')) {
            localStorage.setItem('authenticated', 'true');
            alert('Welcome ' + username)
            window.location.href ='lasu.html';
        
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });     
});
