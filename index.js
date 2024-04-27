function submitData(name, email) {
  let data = {
    name: name,
    email: email
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    console.log(data); // Do something with the response data

    // Retrieve the new ID value from the response data
    const newId = data.id;

    // Append the new ID to the DOM
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(idElement);

    return data; // Return the response data
  })
  .catch(error => {
    const errorMessage = error.message;
  
    // Append error message to the DOM
    const errorElement = document.createElement('p');
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
  });
    document.addEventListener('DOMContentLoaded', () => {
      // Your code here
      const message = "Unauthorize Access"
    });
  
    // Rethrow the error to be caught by the caller of submitData
    throw error;
}