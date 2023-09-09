// Obtener una referencia al botón de enviar información
const botonEnviar = document.getElementById('botonEnviar');

// Agregar un evento de clic al botón
botonEnviar.addEventListener('click', () => {
  // Obtener los valores de los campos de entrada
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nacimiento = document.getElementById('nacimiento').value;

  // Crear un objeto con los datos
  const llamado = {
    nombre: nombre,
    apellido: apellido,
    fechadenacimiento: nacimiento,
  };

  // Definir las opciones de la solicitud fetch
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(llamado),
  };

  // Realizar la solicitud fetch
  fetch('https://jsonplaceholder.typicode.com/users', opciones)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});