const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.edit-post').addEventListener('submit', editFormHandler);

 async function deleteFormHandler(event) {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.delete-btn').addEventListener('click', deleteFormHandler);