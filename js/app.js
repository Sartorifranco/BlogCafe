// querySelector


const heading = document.querySelector('#heading'); // Esto devuelve 0 o 1 elemento como maximo
//heading.textContent = 'Nuevo Header' // Esto sirve para hacer cambios a los elementos desde JS
console.log(heading);


// querySelectorAll


const enlaces = document.querySelectorAll('.navegacion a'); // Esto devuelve de 0 a todos los que concuerden con este selector
console.log(enlaces[0]);

//enlaces[0].textContent = 'Nueva Navegacion'; // Cambia el nombre del elemento
//enlaces[0].href = 'http://google.com' // Redirige a otro href
//enlaces[0].classList.add('nuevaClase'); // Agrega una nueva clase al elemento
//enlaces[0].classList.remove('navegacion__enlace') // Elimina una clase del elemento seleccionado


// getElementById


const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual'
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);


// Eventos


console.log(1);
window.addEventListener('load', function(){ // Load espera a que JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function(){ // Solo espera que se descargue el HTML, por eso aparece primero 
    console.log(4);
});
console.log(5);


// Seleccionar elementos y asociarles un evento


// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     //console.log(evento.target); // esto nos dice a que parte le dio click el usuario
//     console.log(evento);
//     evento.preventDefault(); // Sirve para validar un formulario 
//     console.log('Enviando formulario');

// });



// Eventos de los Inputs y Textarea (Eventos de teclado)


const datos = { // Con este objeto y la funcion leerTexto podemos ordenar mas la informacion para ver del usuario
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // Validar formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');

        return;
    }
    
    // Crear otra alerta para formulario successfully
    
    if (nombre !== '' || email !== '' || mensaje !== '') {
        mostrarMensajeEnviado('El formulario ha sido enviado correctamente');

        return;
    } 

    // Enviar formulario

    console.log('Enviando formulario');
});

function leerTexto(e){
    //console.log(e.target.value); // Agregamos 'value' para ver que escribe el usuario 
    datos[e.target.id] = e.target.value;

    console.log(e.target); // Contiene el input donde esta escribiendo el usuario
   // console.log(datos);

}

function mostrarAlerta(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
}

// Muestra un error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild (error);

    //Desaparece la notificacion 

    setTimeout(function(){
        error.remove();
    }, 3000);
}

// Muestra mensaje de formulario enviado correctamente

function mostrarMensajeEnviado(mensaje) {
    const enviado = document.createElement('P');
    enviado.textContent = mensaje;
    enviado.classList.add('enviado');
    formulario.appendChild(enviado);

    //Desaparece la notificacion 

    setTimeout(function(){
        enviado.remove();
    }, 3000);
}
