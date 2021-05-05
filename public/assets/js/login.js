//dom elements
const createBtn = document.querySelector('#create');
const loginBtn = document.querySelector('#login');
//user input fields
const createUserName = document.querySelector('#username-a');
const createPwd = document.querySelector('#password-a');
const userEmail = document.querySelector('#email');
const  usersName = document.querySelector('#name');
const logUserName = document.querySelector('username-b');
const logPwd = document.querySelector('#password-b');


loginBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    const loginObj = {
        username: logUserName.value,
        password: logPwd.value
    };

});

createBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    const newUserObj = {
        name: usersName.value,
        username: createUserName.value,
        email: userEmail.value,
        password: createPwd.value
    }
});

