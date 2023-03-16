const botonRegresar = document.getElementById('go-checkout');

botonRegresar.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// get data JSON
fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    // Fill the form fields with the JSON data
    document.getElementById('name').value = data.name;
    document.getElementById('lastname').value = data.lastname;
    document.getElementById('email').value = data.emaili;
    document.getElementById('phone').value = data.phone;
    document.getElementById('country').value = data.adress.country;
    document.getElementById('state').value = data.adress.state;
    document.getElementById('postal-code').value = data.adress.cp;
    document.getElementById('street').value = data.adress.street;
}).catch(error => console.error(error));

// Enable edit button
const editButton = document.getElementById('edit-button');
editButton.addEventListener('click', function() {
  const formFields = document.querySelectorAll('#shipping-form input');
  formFields.forEach(field => field.removeAttribute('readonly'));

    // Get form data
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postal-code').value;
    const street = document.getElementById('street').value;

    // Create an object with the form data
    const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: {
        country: country,
        state: state,
        postalCode: postalCode,
        street: street
    }
    };

    // Read the current data from the file "data.json"
    fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
    // Add the new data to the data array
    data.push(formData);

    // Convert the data to JSON format
    const jsonData = JSON.stringify(data);

    // Save the new data in the file "data.json"
    fetch('js/data.json', {
        method: 'PUT',
        body: jsonData
    });
});


});