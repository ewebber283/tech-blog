const post_id = document.querySelector('input[name="post"]').value;

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('texarea[name="comment"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#').addEventListener('submit', newFormHandler);

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('texarea[name="comment"]').value;

    const response = await fetch(`/api/posts/${post_id}`, {
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
  
  document.querySelector('#').addEventListener('submit', editFormHandler);

 async function deleteFormHandler(event) {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#').addEventListener('click', deleteFormHandler);