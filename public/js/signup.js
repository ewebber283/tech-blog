async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && password) {
        
        await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        //error handing with .ok
        if(response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#').addEventListener('submit', signupFormHandler);