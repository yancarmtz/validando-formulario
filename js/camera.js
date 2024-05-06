//la siguiente línea selecciona un elemento HTML que tiene el atributo data-video-boton y lo asigna
//a la constante botonAbrirCamara. Probablemente este elemento sea un botón que abre la cámara del dispositivo.
const botonAbrirCamara = document.querySelector("[data-video-boton]");

//la siguiente línea selecciona un elemento HTML que tiene el atributo data-video y lo asigna 
//a la constante video. Este elemento probablemente sea un elemento <video> 
//donde se mostrará la transmisión de la cámara.
const video = document.querySelector("[data-video]");

//la siguiente línea selecciona un elemento HTML que tiene el atributo data-camera 
//y lo asigna a la constante campoCamara. Este elemento probablemente sea un contenedor o un área donde se mostrará la cámara.
const campoCamara = document.querySelector("[data-camera]");

//la siguiente línea selecciona un elemento HTML que tiene el atributo data-tomar-foto 
//y lo asigna a la constante botonTomarFoto. Este elemento probablemente sea un botón que permite tomar una fotografía.
const botonTomarFoto = document.querySelector("[data-tomar-foto]");

//la siguiente Esta línea selecciona un elemento HTML que tiene el atributo data-mensaje y 
//lo asigna a la constante mensaje. Este elemento probablemente sea un lugar donde se mostrará un mensaje al usuario.
const mensaje = document.querySelector("[data-mensaje]");

//la siguiente línea selecciona un elemento HTML que tiene el atributo data-video-canvas y
//lo asigna a la constante canvas. Este elemento probablemente sea un elemento <canvas> donde se mostrará la imagen capturada.
const canvas = document.querySelector("[data-video-canvas]");

//la siguiente línea selecciona un elemento HTML que tiene el atributo data-enviar
//y lo asigna a la constante botonEnviar. Este elemento probablemente sea un botón que permite enviar la imagen capturada.
const botonEnviar = document.querySelector("[data-enviar]");

//la siguiente línea declara una variable imgUrl y la inicializa con el valor 0. 
//Esta variable probablemente se utilizará para almacenar la URL de la imagen capturada.
let imgUrl = 0;





//************************************************************************************************************************************ */
//
// ASYNC ***************************************************** 
//El uso de async y await en este contexto es muy importante para manejar de manera adecuada la asincronía.
//En este caso, la función de callback pasada a addEventListener está declarada como async. 
//Esto significa que esta función puede usar la palabra clave await para esperar por operaciones asincrónicas.
//
//LA ASINCRONÍA EN JAVASCRIPT ES UN CONCEPTO FUNDAMENTAL QUE SE REFIERE 
//A LA CAPACIDAD DE EJECUTAR TAREAS DE MANERA NO SECUENCIAL. 
//EN UN ENTORNO SÍNCRONO, LAS TAREAS SE EJECUTAN UNA TRAS OTRA, 
//DE FORMA BLOQUEANTE, LO QUE SIGNIFICA QUE EL PROGRAMA SE 
//DETIENE HASTA QUE LA TAREA ACTUAL SE COMPLETE.
//EN CONTRASTE, EN UN ENTORNO ASÍNCRONO, LAS TAREAS PUEDEN
//EJECUTARSE EN PARALELO, SIN BLOQUEAR LA EJECUCIÓN DEL 
//PROGRAMA PRINCIPAL. ESTO PERMITE QUE EL PROGRAMA SIGA 
//AVANZANDO MIENTRAS ESPERA QUE UNA TAREA ASINCRÓNICA SE COMPLETE.
//
//ALGUNOS EJEMPLOS DE TAREAS ASINCRÓNICAS EN JAVASCRIPT SON:
//
//1. LLAMADAS A API: CUANDO SE HACE UNA SOLICITUD A UN SERVIDOR WEB, 
//   EL PROGRAMA NO SE BLOQUEA ESPERANDO LA RESPUESTA. EN SU LUGAR, 
//   EL PROGRAMA CONTINÚA EJECUTÁNDOSE Y MANEJA LA RESPUESTA CUANDO ESTA LLEGA.
//
//2. TEMPORIZADORES: FUNCIONES COMO SETTIMEOUT() Y SETINTERVAL() 
//   PERMITEN PROGRAMAR LA EJECUCIÓN DE CÓDIGO EN EL FUTURO, 
//   SIN BLOQUEAR EL PROGRAMA PRINCIPAL.
//
//3. EVENTOS DEL DOM: CUANDO SE PRODUCE UN EVENTO EN EL DOM, COMO UN CLIC DE USUARIO, 
//   EL PROGRAMA MANEJA EL EVENTO A TRAVÉS DE UN MANEJADOR DE EVENTOS, SIN BLOQUEAR LA EJECUCIÓN.
//
//4. LECTURA/ESCRITURA DE ARCHIVOS: LAS OPERACIONES DE ENTRADA/SALIDA (I/O) 
//   CON ARCHIVOS TAMBIÉN SE EJECUTAN DE MANERA ASINCRÓNICA, 
//   PARA EVITAR BLOQUEAR EL PROGRAMA.
//
//PARA MANEJAR LA ASINCRONÍA EN JAVASCRIPT, SE UTILIZAN DIFERENTES TÉCNICAS, COMO CALLBACKS, 
//PROMESAS, ASYNC/AWAIT Y GENERADORES. ESTAS HERRAMIENTAS PERMITEN A LOS DESARROLLADORES 
//ESCRIBIR CÓDIGO MÁS LEGIBLE, MANTENIBLE Y ESCALABLE, AL EVITAR LOS PROBLEMAS ASOCIADOS 
//CON LA PROGRAMACIÓN SÍNCRONA, COMO EL "CALLBACK HELL" Y LA DIFICULTAD PARA MANEJAR ERRORES.
//
//EN RESUMEN, LA ASINCRONÍA ES UN CONCEPTO FUNDAMENTAL EN JAVASCRIPT QUE PERMITE QUE EL
// PROGRAMA SIGA AVANZANDO MIENTRAS ESPERA QUE TAREAS DE LARGA DURACIÓN SE COMPLETEN,
// MEJORANDO LA EXPERIENCIA DEL USUARIO Y LA EFICIENCIA DEL CÓDIGO.
//
//-------------------------------
//Específicamente, en la línea:
//
// const iniciarVideo = await navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: false
// });
//
//La llamada a navigator.mediaDevices.getUserMedia() es una operación asincrónica, 
//ya que requiere acceder a los dispositivos de medios del usuario 
//(en este caso, la cámara web). Al usar await delante de esta llamada, 
//la función de callback async se detendrá y esperará a que la operación 
//de getUserMedia() se complete antes de continuar con la ejecución del código.
//
//Esto es importante porque getUserMedia() devuelve una promesa, y sin el uso de await, 
//la función de callback continuaría ejecutándose sin esperar a que la promesa se resuelva.
//Al usar await, la función se bloquea hasta que la promesa se resuelve, y el valor 
//resuelto (en este caso, el objeto de transmisión de video) se asigna a la variable 
//iniciarVideo.
//
//Luego, el resto del código dentro de la función de callback se ejecuta, 
//ocultando el botón botonAbrirCamara, mostrando el campo campoCamara 
//y asignando el objeto de transmisión de video al elemento video.
//
//En resumen, el uso de async y await en este código permite manejar de manera 
//más sencilla y legible la asincronía involucrada en el acceso a la cámara web del usuario.
//
//****************************************** */
//COMO FUNCIONA EL CODIGO SIGUIENTE:
//
//1.-botonAbrirCamara.addEventListener("click", async () => { ... });
//   Esta línea agrega un evento de "clic" al elemento botonAbrirCamara. 
//   Cuando el usuario haga clic en este botón, se ejecutará la función que está dentro de las llaves { ... }.
//
//2.-const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
//   Esta línea utiliza la API navigator.mediaDevices.getUserMedia() para solicitar acceso 
//   a la cámara del dispositivo del usuario. El parámetro { video: true, audio: false } 
//   indica que solo queremos acceder a la cámara de video, sin audio.
//   La palabra clave await se utiliza para esperar a que se obtenga el acceso 
//   a la cámara antes de continuar con el código.
//   El resultado de getUserMedia() se asigna a la constante iniciarVideo.
//
//3.-botonAbrirCamara.style.display = "none";
//   Esta línea oculta el botón botonAbrirCamara estableciendo su propiedad display a "none".
//
//4.-campoCamara.style.display = "block";
//   Esta línea muestra el elemento campoCamara estableciendo su propiedad display a "block".
//
//5.-video.srcObject = iniciarVideo;
//   Esta línea asigna el objeto iniciarVideo (que contiene el acceso a la cámara) a 
//   la propiedad srcObject del elemento <video>. Esto hace que la transmisión 
//   de la cámara se muestre en el elemento <video>.
//
//En resumen, este código se encarga de solicitar acceso a la cámara del dispositivo 
//del usuario cuando se hace clic en el botón botonAbrirCamara. 
//Una vez que se obtiene el acceso, se oculta el botón, se muestra
//el elemento campoCamara y se asigna la transmisión de la cámara
//al elemento <video>. Esto permite que el usuario pueda ver la
//imagen de la cámara en la aplicación.
//
botonAbrirCamara.addEventListener("click", async () => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    });

    botonAbrirCamara.style.display = "none";

    campoCamara.style.display = "block";

    video.srcObject = iniciarVideo;
});


//********************************************************************************************************************************** */
//
//1.-botonTomarFoto.addEventListener("click", () => { ... });
//   Esta línea agrega un evento de "clic" al elemento botonTomarFoto. 
//   Cuando el usuario haga clic en este botón, se ejecutará la función que está dentro de las llaves { ... }.
//
//2.-canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
//   Esta línea utiliza el elemento <canvas> para capturar la imagen de la cámara.
//
//   Primero, se obtiene el contexto 2D del canvas utilizando getContext("2d").
//
//   Luego, se utiliza el método drawImage() para copiar la imagen del elemento
//   <video> (que muestra la transmisión de la cámara) en el canvas. Los parámetros 0, 0 
//   indican que la imagen se colocará en la esquina superior izquierda del canvas, 
//   y canvas.width, canvas.height indican que la imagen se ajustará al tamaño del canvas.
//
//3.-imgUrl = canvas.toDataURL("image/jpeg");
//   Esta línea convierte la imagen capturada en el canvas a una URL 
//   de datos en formato JPEG y la asigna a la variable imgUrl.
//
//4.-campoCamara.style.display = "none";
//   Esta línea oculta el elemento campoCamara estableciendo su propiedad display a "none".
//
//5.-mensaje.style.display = "block";
//   Esta línea muestra el elemento mensaje estableciendo su propiedad display a "block".
//
//   * style: 
//   La propiedad style permite acceder y modificar los estilos CSS aplicados a un elemento HTML.
//   Puedes establecer o cambiar cualquier propiedad CSS a través de la propiedad style.
//   Ejemplo: elemento.style.color = "red"; (cambia el color del texto a rojo)
//   Ejemplo: elemento.style.fontSize = "20px"; (cambia el tamaño de fuente a 20 píxeles)
//
//   * display:
//   La propiedad display controla cómo se muestra un elemento HTML en la página.
//   Los valores más comunes son:
//   "none": oculta el elemento, eliminándolo del flujo normal de la página.
//   "block": muestra el elemento como un bloque (por ejemplo, un <div> o un <p>).
//   "inline": muestra el elemento en línea (por ejemplo, un <span> o un <a>).
//    Ejemplo: elemento.style.display = "none"; (oculta el elemento)
//    Ejemplo: elemento.style.display = "block"; (muestra el elemento como un bloque)
//   
//    En resumen:
//    style te permite modificar los estilos CSS de un elemento HTML.
//    display te permite controlar cómo se muestra un elemento en la página, ya sea ocultándolo, mostrándolo como bloque o en línea.
//    Estas propiedades son muy útiles para manipular la apariencia y el comportamiento visual de los elementos en una aplicación web.
//
//En resumen, este código se encarga de capturar una imagen de la cámara cuando el usuario 
//hace clic en el botón botonTomarFoto. La imagen se captura en un elemento <canvas>
//y se convierte a una URL de datos en formato JPEG, que se almacena en 
//la variable imgUrl. Luego, se oculta el elemento campoCamara 
//(que mostraba la transmisión de la cámara) y 
//se muestra el elemento mensaje. Esto indica que 
//la imagen ha sido capturada y está lista para ser utilizada.
//
botonTomarFoto.addEventListener("click", () => {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    imgUrl = canvas.toDataURL("image/jpeg");

    campoCamara.style.display = "none";
    mensaje.style.display = "block";
});


//*********************************************************************************************************************************************** */
//
//1.-botonEnviar.addEventListener("click", () => { ... });
//   Esta línea agrega un evento de "clic" al elemento botonEnviar. 
//   Cuando el usuario haga clic en este botón, se ejecutará la función que está dentro de las llaves { ... }.
//
//2.-const recibirDatos = localStorage.getItem("registro");
//   Esta línea obtiene los datos almacenados en el almacenamiento local (localStorage) 
//   con la clave "registro" y los asigna a la constante recibirDatos.
//
//   getItem() es un método de localStorage que se utiliza para 
//   recuperar un valor almacenado con una clave específica.
//   En este caso, se está llamando a getItem("registro"), 
//   lo que significa que se está recuperando el valor 
//   almacenado con la clave "registro".
//
//3.-const convertirDatos = JSON.parse(recibirDatos);
//   Esta línea convierte los datos almacenados en recibirDatos
//  (que están en formato de texto) a un objeto JavaScript utilizando la función JSON.parse().
//
//  El objeto resultante se asigna a la constante convertirDatos.
//
//4.-convertirDatos.img_url = imgUrl;
//   Esta línea agrega una nueva propiedad llamada "img_url" 
//   al objeto convertirDatos y le asigna el valor de la variable imgUrl.
//
//   Esto significa que se está guardando la URL de la imagen capturada en el objeto de datos.
//
//   La propiedad img_url en el código anteriormente se
//   utiliza para almacenar la URL de la imagen capturada por la cámara del dispositivo.
//
//5.-localStorage.setItem("registro", JSON.stringify(convertirDatos));
//   Esta línea guarda el objeto convertirDatos (que ahora incluye la URL de la imagen) 
//   de vuelta en el almacenamiento local (localStorage) con la clave "registro".
//   Antes de guardarlo, se convierte el objeto a una cadena de texto utilizando JSON.stringify().
//
//   - setItem() es un método de localStorage que se utiliza para almacenar un valor con una clave específica.
//
//     En este caso, se está llamando a setItem("registro", JSON.stringify(convertirDatos)), lo que significa que:
//     La clave utilizada para almacenar el valor es "registro".
//  
//     El valor que se está almacenando es el objeto convertirDatos, pero antes se convierte 
//     a una cadena de texto utilizando JSON.stringify().
//  
//     Entonces, setItem() sirve para guardar datos en el almacenamiento local del navegador. 
//  
//     Esto es útil cuando necesitas almacenar información que el usuario ha proporcionado 
//     o que has generado durante la sesión, y quieres que se mantenga disponible incluso 
//     después de que el usuario cierre la pestaña o la ventana del navegador.
//     
//     Por ejemplo, podrías usar setItem() para guardar preferencias del usuario, 
//     datos de un formulario o cualquier otra información que quieras que 
//     se mantenga entre sesiones.
//
//   - JSON.stringify() en JavaScript se utiliza para convertir un objeto 
//     JavaScript en una cadena JSON. Esto es útil cuando deseas enviar 
//     datos estructurados a través de una red o almacenarlos en un 
//     formato legible por máquinas en una base de datos, por ejemplo.
//   
//   En resumen, setItem() es una función muy útil para almacenar datos en 
//   el navegador del usuario, lo que puede ser muy conveniente para mantener 
//   el estado de la aplicación y mejorar la experiencia del usuario.
//
//6.-window.location.href = "./abrir-cuenta-form-3.html";
//   Esta línea redirige al usuario a la página abrir-cuenta-form-3.html 
//   después de guardar los datos en el almacenamiento local.
//
//En resumen, este código:
//
//1.-Obtiene los datos almacenados en el almacenamiento local.
//2.-Agrega la URL de la imagen capturada a esos datos.
//3.-Guarda los datos actualizados de vuelta en el almacenamiento local.
//4.-Redirige al usuario a la siguiente página de la aplicación.
//
//Esto permite que la información de la imagen capturada se guarde 
//y se pueda utilizar en pasos posteriores de la aplicación.
//
botonEnviar.addEventListener("click", () => {
    const recibirDatos = localStorage.getItem("registro");
    const convertirDatos = JSON.parse(recibirDatos);

    convertirDatos.img_url = imgUrl;

    localStorage.setItem("registro", JSON.stringify(convertirDatos));

    window.location.href = "./abrir-cuenta-form-3.html";
});

