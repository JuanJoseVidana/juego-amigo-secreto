/*
Título: Reto de Lógica de Programación
Autor: Juan Vidaña
Fecha de inicio: 10 de marzo de 2025

        Descripción:
Este script implementa una aplicación donde los usuarios pueden agregar nombres de amigos a una lista 
y seleccionar aleatoriamente un 'Amigo Secreto'. El programa incluye validación de entrada, 
visualización de la lista y una funcionalidad de sorteo aleatorio.

        Características:
- Agregar nombres a la lista
- Validar entradas vacías
- Mostrar la lista actualizada en tiempo real
- Seleccionar y mostrar un nombre aleatoriamente como el Amigo Secreto

Uso: Simplemente vincula este script a un archivo HTML, y la aplicación manejará todas las interacciones.

Última actualización: 10/03/2025
*/

let amigos = []; // Inicializar un arreglo vacío para almacenar los nombres de los amigos

function agregarAmigo() {
    const nuevoNombre = document.getElementById('amigo').value; // Obtener el elemento de entrada
    if (nuevoNombre === '') { // Verificar si la entrada está vacía
        alert('Por favor, inserte un nombre.'); // Mostrar un mensaje de alerta
        return; // Salir de la función
    } else {
        amigos.push(nuevoNombre); // Agregar el nuevo nombre a la lista
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
    }
}