let signup = async (event) => {
    event.preventDefault();

    //get signup form id's
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && username && password) {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ name, email, username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            }
        } catch (err) {
            alert(err.message);
        }
    }
};

document
    .querySelector('#submit-signup')
    .addEventListener('click', signup);
