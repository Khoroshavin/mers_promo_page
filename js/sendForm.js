document.addEventListener("DOMContentLoaded", function (event) {

  const form = document.querySelector('.form-test-drive');
  // ENDPOINT URL
  const url = 'https://jsonplaceholder.typicode.com/posts';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data ={};

    // getting data of form
    for( let {name, value} of form.elements) {
      if(name) {
        data[name] = value;
      }
    }

    // fetch send form data to endpoint
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        if(response.status ===200 || response.status === 201) {
          return response.json();
        }
        else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        alert('user data was send succsesfully!');
        form.reset();
      })
      .catch(error => {
        alert('fetch error, status: ' + error.message);
      });
  });



});