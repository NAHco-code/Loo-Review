// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     //get login form id's
//     const email = document.querySelector('#email-login').nodeValue.trim();
//     const password = document.querySelector('#password-login').nodeValue.trim();

//     if (email && password) {

//         const response = await fetch('/api/user/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/main');
//         } else {
//             alert(err.message);
//         }
//     }
// };

// document
//     .querySelector('#submit-login')
//     .addEventListener('click', loginFormHandler);
