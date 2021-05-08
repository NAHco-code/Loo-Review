
let login = async (event) => {
    event.preventDefault();

    //get login form id's
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                window.location.replace('/main');
            }
        } catch (err) {
            window.location.replace('/');
        }
    }
};

document
    .querySelector('#submit-login')
    .addEventListener('click', login);
