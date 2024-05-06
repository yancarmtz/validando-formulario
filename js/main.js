//La línea import esUnCuil from "./validar-cuil.js"; es una declaración de importación
//en JavaScript que se utiliza para importar la función esUnCuil 
//desde el archivo validar-cuil.js. Aquí está el desglose:
//
// import: Esta es la palabra clave utilizada en JavaScript para importar un 
//valor desde otro archivo. En este caso, estamos importando la función 
//esUnCuil desde el archivo validar-cuil.js.
//
// esUnCuil: Este es el nombre que se le da al valor que estamos importando desde 
//el archivo validar-cuil.js. En este caso, estamos importando la función esUnCuil, 
//por lo que estará disponible para su uso en el archivo actual con ese nombre.
//
// from "./validar-cuil.js": Esta parte de la declaración de importación especifica 
//la ubicación del archivo del que estamos importando la función esUnCuil. 
//En este caso, el archivo se llama validar-cuil.js y está en el mismo 
//directorio que el archivo actual, por lo que usamos ./ 
//para indicar que está en el mismo directorio.
//
//En resumen, la línea import esUnCuil from "./validar-cuil.js"; 
//se utiliza para importar la función esUnCuil desde el
//archivo validar-cuil.js para que esté disponible 
//para su uso en el archivo actual.
import esUnCuil from "./validar-cuil.js";

//*************************************************************** */
//SE IMPORTA LA FUNCION esMayorDeEdad del archivo validar-edad.js:
import esMayorDeEdad from "./validar-edad.js";

//*************************************************************** */
//SE IMPORTAN LAS CONSTANTES tiposError y mensajes del archivo customErrors.js:
import {tiposError, mensajes} from "./customErrors.js"


//************************************************************************************************************** */
//
// la siguiente línea de código utiliza el método querySelectorAll para seleccionar todos los elementos 
//del formulario que tienen el atributo "required". El atributo "required" 
//se utiliza en HTML para especificar que un campo de formulario debe ser 
//completado antes de enviar el formulario.
//
//Entonces, al utilizar document.querySelectorAll("[required]"), estamos buscando todos los elementos 
//del formulario que tienen este atributo, y luego almacenamos esos elementos en la variable campoDeformulario. 
//Esto nos permite acceder a esos elementos y realizar validaciones en JavaScript, como verificar si están 
//completos antes de enviar el formulario.
const campoDeformulario = document.querySelectorAll("[required]");

console.log("required:");
console.log(document.querySelectorAll("[required]"))




//**********************************************************************************************************************/
//
//1.-const formulario = document.querySelector("[data-formulario]");
//   Esta línea selecciona el elemento HTML que tiene el atributo data-formulario 
//   y lo asigna a la constante formulario. Probablemente este elemento sea un <form>.
//
//2.-formulario.addEventListener("submit", (e) => { ... });
//   Esta línea agrega un evento de "submit" (envío de formulario) al elemento formulario.
//   Cuando el usuario envía el formulario, se ejecutará la función dentro de las llaves { ... }.
//   El parámetro e representa el evento de envío del formulario.
//
//3.-e.preventDefault();
//   Esta línea evita que el formulario se envíe de manera predeterminada, 
//   lo que haría que la página se recargara.
//   Esto se hace para poder procesar los datos del formulario 
//   de manera personalizada.
//
//4.-const listaRespuestas = { ... };
//   Aquí se crea un objeto llamado listaRespuestas que contiene las respuestas del usuario en el formulario.
//   Cada propiedad del objeto corresponde a un campo del formulario, como "nombre", "email", 
//   "identificacion", "cuil" y "fecha_nacimiento".
//   Los valores de estas propiedades se obtienen a través de e.target.elements
//   ["nombreDelCampo"].value, donde "nombreDelCampo" es el nombre del campo en el formulario.
//
//   EXPLICACION DE e.target.elements :
//   e.target.elements["xxxx"].value;
//
//   e : es el evento "submit"
//
//   target : es el elemento boton (que en html es un input llamado siguiente - abrir-cuenta-form.html) que va a disparar el evento en este caso "submit"
//
//   e.target se refiere al formulario que desencadenó el evento "submit".
//
//   e.target.elements es una colección de todos los elementos del formulario (campos de entrada, botones, etc.).
//
//   e.target.elements["nombre"] selecciona el elemento del formulario con el nombre "nombre".
//
//   .value obtiene el valor ingresado por el usuario en ese campo.
//
//5.-localStorage.setItem("registro", JSON.stringify(listaRespuestas));
//   Esta línea guarda el objeto listaRespuestas en el almacenamiento local (localStorage) del navegador.
//   La clave utilizada para almacenar los datos es "registro".
//   Antes de guardar el objeto, se convierte a una cadena de texto en formato 
//   JSON utilizando JSON.stringify(listaRespuestas).
//
//6.-window.location.href = "./abrir-cuenta-form-2.html";
//   Esta línea redirige al usuario a la página abrir-cuenta-form-2.html 
//   después de guardar los datos en el almacenamiento local.
//
//En resumen, este código se encarga de:
//
//1.-Seleccionar el formulario en la página.
//2.-Agregar un evento de "submit" al formulario.
//3.-Recopilar los valores de los campos del formulario y almacenarlos en un objeto.
//4.-Guardar el objeto en el almacenamiento local del navegador.
//5.-Redirigir al usuario a la siguiente página de la aplicación.
//
//Esto permite que los datos del formulario se guarden y se puedan utilizar en pasos posteriores de la aplicación.
//
const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // La función principal de e.preventDefault() es evitar el comportamiento predeterminado de un evento. 
                        //Esto significa que, cuando se llama a este método, se impide que el navegador realice la acción por defecto asociada a ese evento.

    const listaRespuestas = { // <= LA LLAVE QUIERE DECIR QUE ES UN OBJETO
        //["nombre"]: sale del atributo name del html.
        nombre: e.target.elements["nombre"].value,    //<= target es el elemento que se disparo seria el boton 
                                                      //y este llama al evento submit en el boton siguiente del formulario y elements los elementos como nombre, email, etc.
        email: e.target.elements["email"].value,
        identificacion: e.target.elements["identificacion"].value,
        cuil: e.target.elements["cuil"].value,
        fecha_nacimiento: e.target.elements["fecha_nacimiento"].value,
    }

    localStorage.setItem("registro", JSON.stringify(listaRespuestas));

    window.location.href = "./abrir-cuenta-form-2.html";
})

//            e.target.elements :
// es una propiedad que se puede acceder a partir del objeto event 
//(representado por la variable e en este caso) que se recibe en los manejadores de eventos. 
//Esta propiedad te permite acceder a todos los elementos del formulario que desencadenó el evento.
//
//Algunos usos comunes de e.target.elements:
//
//1.-Obtener los valores de los campos del formulario: Puedes recorrer los elementos del formulario 
//   y obtener los valores ingresados por el usuario. Esto es muy útil cuando quieres procesar los datos del formulario.
//
//2.-Validar los campos del formulario: Puedes acceder a las propiedades 
//   y métodos de validación de cada campo del formulario, como validity 
//   y checkValidity(), para implementar una validación personalizada.
//
//3.-Restablecer o limpiar el formulario: Puedes usar e.target.elements para restablecer o 
//   limpiar los valores de los campos del formulario después de que se haya enviado.
//
//4.-Aplicar estilos o clases CSS: Puedes usar e.target.elements para aplicar estilos o clases
//   CSS a los campos del formulario, por ejemplo, para resaltar los campos con errores de validación.
//
//En resumen, e.target.elements es una herramienta muy poderosa cuando se trabaja con formularios en JavaScript, 
//ya que te permite acceder y manipular fácilmente todos los elementos del formulario que desencadenó el evento.



//**************************************************************************************************************************/
console.log("campoDeformulario");
console.log(campoDeformulario);

campoDeformulario.forEach((campo) => {
    //blur : cuando pasemos a otro campo se activara este evento.  
    campo.addEventListener("blur", () => verificarCampo(campo))


    //El código "campo.addEventListener("invalid", evento => evento.preventDefault())" 
    //se utiliza para prevenir el comportamiento predeterminado de un evento "invalid" 
    //en un campo de formulario. Esto significa que cuando un campo de formulario es 
    //invalidado (por ejemplo, cuando no se completa correctamente), el evento "invalid" 
    //se activa y el código que proporcionaste evita que el comportamiento predeterminado 
    //de ese evento ocurra. Esto puede ser útil para personalizar la forma en que 
    //se manejan los campos inválidos en un formulario.
    campo.addEventListener("invalid", evento => evento.preventDefault()) //EVITA QUE SE MUESTRA ALGUN MENSAJE DE ERROR PREDEDERMINADO Y SE PUEDA PERSONALIZAR DE OTRA MANERA
});



function verificarCampo(campo) {

    let mensaje = "";

    //********************************************************************************************************************** */
    //
    //La instrucción campo.setCustomValidity(""); tiene como objetivo eliminar cualquier 
    //mensaje de error personalizado que haya sido establecido previamente en el campo del formulario.
    //
    //Veamos en detalle cómo funciona:
    //
    //1.-campo.setCustomValidity(""):
    //   Aquí se está utilizando el método setCustomValidity() del objeto campo, que representa un campo de formulario.
    //
    //  Este método permite establecer un mensaje de error personalizado para el campo.
    //
    //  Al pasarle una cadena vacía "" como argumento, se está indicando que no se desea establecer ningún mensaje de error personalizado.
    //  
    //  Cuando se llama a campo.setCustomValidity(""), se está reseteando el mensaje de error personalizado del campo. Esto significa que:
    //
    //  Si el campo tenía un mensaje de error personalizado establecido anteriormente, este mensaje se eliminará.
    //
    //  El campo volverá a utilizar los mensajes de error predeterminados del navegador, en caso de que haya alguna validación fallida.
    //
    //Esta instrucción es útil cuando se quiere limpiar o eliminar cualquier mensaje de error 
    //personalizado que se haya establecido previamente en un campo de formulario. Esto puede ser necesario, 
    //por ejemplo, cuando el usuario corrige un error y el campo vuelve a ser válido.
    //
    //Al eliminar el mensaje de error personalizado, el campo volverá a mostrar los mensajes 
    //de error estándar del navegador, lo cual puede ser más apropiado y familiar para el usuario.
    campo.setCustomValidity("");


    //********************************************************************************************************************* */
    //la siguiente línea de código utiliza la función console.log para imprimir un 
    //mensaje en la consola del navegador. En este caso, el mensaje que se 
    //imprime es "Cambio" seguido por el nombre del campo que se está modificando, 
    //el cual se accede a través de campo.name.
    //
    //Entonces, cada vez que un campo del formulario pierde el foco, se imprimirá 
    //en la consola un mensaje indicando que ha habido un cambio en el campo, 
    //seguido del nombre del campo que ha sido modificado.
    //
    //Esta es una forma útil de depurar y monitorear el comportamiento 
    //de los campos del formulario mientras el usuario interactúa con ellos.
    console.log("Cambio", campo.name);


    //*********************************************************************************************************************** */
    //
    //Veamos cada parte:
    //
    //1.-if(campo.name == "cuil" && campo.value.length >=11):
    //   Esta es una declaración condicional if que evalúa dos condiciones:
    //
    //   campo.name == "cuil": Verifica si el nombre del campo (o input) es igual a "cuil".
    //
    //   campo.value.length >=11: Verifica si la longitud del valor del campo es mayor o igual a 11 caracteres.
    //
    //   La condición utiliza el operador lógico && (y), lo que significa que ambas condiciones deben ser verdaderas 
    //   para que se ejecute el bloque de código dentro del if.
    //
    //2.-esUnCuil(campo):
    //   Si las condiciones anteriores se cumplen, se llama a la función esUnCuil() y se le pasa el objeto campo como argumento.
    //
    //   La función esUnCuil() probablemente realiza alguna validación adicional 
    //   para verificar si el valor del campo "cuil" es un CUIL (Código Único de Identificación Laboral) válido.
    //
    //En resumen, este fragmento de código verifica si el nombre del campo es "cuil" y si su valor tiene una longitud mayor
    //o igual a 11 caracteres. Si ambas condiciones se cumplen, se llama a la función esUnCuil() para 
    //realizar una validación más específica del CUIL.
    //
    if (campo.name == "cuil" && campo.value.length >= 11) {
        esUnCuil(campo);
    };

    if (campo.name == "fecha_nacimiento" && campo.value != "") {
        esMayorDeEdad(campo);
    };

    //console.log(campo.validity);


    //***************************************************************************************************** */
    //
    //La función que mencionas se encarga de recorrer una lista de "tipos de error" (tiposError)
    // y verificar si alguno de esos errores está presente en el campo del formulario (campo.validity[error]).
    //
    //Veamos paso a paso:
    //
    //1.-tiposError.forEach(error => { ... }): Esta línea indica que vamos a recorrer cada elemento
    //   de la lista "tiposError". Por cada elemento, se ejecutará el código dentro de las llaves { ... }.
    //
    //2.-if(campo.validity[error]) { ... }: Aquí se verifica si el campo del formulario (campo) 
    //   tiene algún error del tipo que se está revisando (error). 
    //   La propiedad validity del campo contiene información sobre la
    //   validez del campo, y se accede a ella usando el nombre del error (error).
    //
    //3.-mensaje = mensajes[campo.name][error];: Si se encuentra un error, 
    //se asigna el mensaje de error correspondiente a la variable "mensaje". 
    //Los mensajes de error se encuentran en un objeto llamado "mensajes", 
    //y se accede a ellos usando el nombre del campo (campo.name) y el tipo de error (error).
    //
    //4.-console.log(mensaje);: Finalmente, se imprime el mensaje de error en la consola del navegador.
    //
    //En resumen, esta función recorre los posibles tipos de error, verifica si alguno de esos
    //errores está presente en el campo del formulario, y si es así, obtiene el 
    //mensaje de error correspondiente y lo muestra en la consola.
    tiposError.forEach(error => {
        if(campo.validity[error]) {
           mensaje = mensajes[campo.name][error];
           console.log(mensaje);
        }
    });



    //************************************************************************************************ */
    //
    //1.-const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    //   Esta línea está buscando un elemento HTML con la clase ".mensaje-error" 
    //   que sea el nodo padre del campo del formulario (campo).
    //   Esto se hace para encontrar el elemento donde se mostrará 
    //   el mensaje de error correspondiente a ese campo.
    //
    //   parentNode es una propiedad en JavaScript que permite acceder al nodo padre de un elemento HTML.
    //
    //   Cuando se selecciona un elemento en el DOM (Document Object Model), 
    //   parentNode devuelve el nodo que contiene directamente a ese elemento. 
    //   En otras palabras, es el nodo padre inmediato del elemento seleccionado.
    //   
    //   Por ejemplo, si tienes el siguiente HTML:
    //   
    //   <div>
    //     <p>Este es un párrafo</p>
    //   </div>
    //   
    //   Y seleccionas el elemento <p> usando JavaScript, parentNode devolverá el elemento <div>, que es el nodo padre del párrafo.
    //   
    //   Esto es muy útil cuando necesitas acceder a elementos que están en un nivel superior
    //   o más cercanos al elemento que has seleccionado. Permite navegar a través 
    //   de la estructura del DOM de manera más eficiente.
    //   
    //   En el contexto del código que me mostraste anteriormente, campo.parentNode 
    //   está buscando el nodo padre del campo del formulario, con el objetivo 
    //   de encontrar el elemento donde se mostrará el mensaje de 
    //   error correspondiente a ese campo.
    //-------------------------------------------------------
    //2.-const validarInputCheck = campo.checkValidity();
    //   Aquí se está verificando la validez del campo del formulario utilizando el método checkValidity().
    //   Este método devuelve true si el campo cumple con las validaciones establecidas, y false si hay algún error.
    //   El resultado de esta verificación se guarda en la variable validarInputCheck.
    //-------------------------------------------------------
    //3.-if (!validarInputCheck) { ... }
    //   Esta parte del código verifica si el campo no es válido (es decir, validarInputCheck es false).
    //-------------------------------------------------------
    //4.-mensajeError.textContent = mensaje;
    //   Si el campo no es válido, se asigna el valor de la variable mensaje al textContent del elemento mensajeError.
    //   Esto hará que se muestre el mensaje de error correspondiente al usuario.
    //--------------------------------------------------------
    //5.- } else { ... }
    //    Si el campo es válido (es decir, validarInputCheck es true), se ejecutará el código dentro de este bloque else.
    //---------------------------------------------------------
    //6.-mensajeError.textContent = "";
    //   En este caso, se asigna una cadena vacía al textContent del elemento mensajeError.
    //   Esto hará que se oculte o elimine cualquier mensaje de error que se haya mostrado anteriormente.
    //---------------------------------------------------------
    //En resumen, este código verifica la validez de un campo de formulario utilizando 
    //el método checkValidity(), y luego muestra u oculta el mensaje de error 
    //correspondiente en un elemento HTML específico, dependiendo del resultado de la validación.
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");

    const validarInputCheck = campo.checkValidity();

    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = "";
    }
}