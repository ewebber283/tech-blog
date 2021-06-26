async function loginFormHandler(event) {
    event.preventDefault();
    //grabs data from form and make post request
    const username = document.querySelector('#password-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        // await allows us to get rid of the then 
        await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#').addEventListener('submit', loginFormHandler);