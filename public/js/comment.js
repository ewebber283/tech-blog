async function commentFormHandler(event) {
    event.preventDefault();


  
    const post_id = document.querySelector('input[name="post"]').value;
    const body = document.querySelector('texarea[name="comment"]').value;
  
    if (body) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            body
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('#').addEventListener('submit', commentFormHandler);