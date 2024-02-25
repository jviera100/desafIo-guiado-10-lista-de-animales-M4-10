// Cuando el formulario se envía, se ejecuta esta función
document.getElementById('consultaForm').addEventListener('submit', function(event) {
    // Requerimiento 1: Recoger los datos del formulario
    // Requerimiento 2: Evitar que la página se recargue
    event.preventDefault();

    // Recogemos los datos ingresados en cada campo del formulario
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    // Obtenemos una referencia a la lista donde se mostrarán los datos
    let listaDatos = document.getElementById('listaDatos');

    // Requerimiento 3: Mostrar los datos en la página
    // Añadimos los datos recogidos a la lista en la sección "Datos Agregados"
    listaDatos.innerHTML += '<li>Dueño: ' + propietario + ', Teléfono: ' + telefono + ', Dirección: ' + direccion + ', Nombre de la Mascota: ' + nombreMascota + ', Tipo: ' + tipo + ', Motivo de la consulta: ' + enfermedad + '</li>';
});
