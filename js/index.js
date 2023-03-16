const botonRegresar = document.getElementById('go-checkout');

botonRegresar.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// get data JSON
fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    // Rellenar los campos del formulario con los datos del JSON
    document.getElementById('name').value = data.name;
    document.getElementById('lastname').value = data.lastname;
    document.getElementById('email').value = data.emaili;
    document.getElementById('phone').value = data.phone;
    document.getElementById('country').value = data.adress.country;
    document.getElementById('state').value = data.adress.state;
    document.getElementById('postal-code').value = data.adress.cp;
    document.getElementById('street').value = data.adress.street;
}).catch(error => console.error(error));

// Habilitar el botón de edición
const editButton = document.getElementById('edit-button');
editButton.addEventListener('click', function() {
  const formFields = document.querySelectorAll('#shipping-form input');
  formFields.forEach(field => field.removeAttribute('readonly'));

    // Obtener los datos del formulario
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postal-code').value;
    const street = document.getElementById('street').value;

    // Crear un objeto con los datos del formulario
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

    // Leer los datos actuales del archivo "datos.json"
    fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
    // Agregar los nuevos datos al array de datos
    //console.log(formData)
    data.push(formData);

    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(data);

    // Guardar los nuevos datos en el archivo "datos.json"
    fetch('js/data.json', {
        method: 'PUT',
        body: jsonData
    });
});


});