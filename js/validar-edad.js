// export default function esMayorDeEdad(campo) {
//     const fechaNacimiento = new Date(campo.value);
//     console.log(fechaNacimiento);
// }
//
//1.-export default function esMayorDeEdad(campo):
//   Esta línea define una función llamada esMayorDeEdad que se exporta como el valor predeterminado (default) del módulo.
//   La función recibe un parámetro llamado campo, que probablemente sea un objeto que representa un campo de formulario.
//
//2.-const fechaNacimiento = new Date(campo.value);:
//   Dentro de la función, se declara una constante llamada fechaNacimiento.
//   El valor de esta constante se asigna creando un nuevo objeto Date a partir del valor del campo (campo.value).
//   Esto significa que se está convirtiendo el valor del campo (que presumiblemente contiene una fecha de nacimiento)
//   en un objeto Date que representa esa fecha.
//
//3.-if(!validarEdad(fechaNacimiento)) {
//   Esta línea está verificando si la función validarEdad() devuelve un valor falso (false) 
//   cuando se le pasa el parámetro fechaNacimiento.
//
//   La función validarEdad() probablemente está implementada en alguna otra parte del código 
//   y se encarga de determinar si la persona es mayor de edad o no, en base a la fecha de nacimiento proporcionada.
//   Si la función validarEdad() devuelve false, significa que la persona no es mayor de edad,
//   por lo que se ejecutará el código dentro de las llaves { ... }.
//   campo.setCustomValidity("Necesitas ser mayor de edad")
//
//   Esta línea está estableciendo un mensaje de error personalizado en el campo del 
//   formulario utilizando el método setCustomValidity().
//   El método setCustomValidity() permite establecer un mensaje de error específico para 
//   un campo de formulario, en lugar de utilizar los mensajes de error predeterminados del navegador.
//   En este caso, se está estableciendo el mensaje "Necesitas ser mayor de edad" como 
//   el mensaje de error personalizado para el campo del formulario.
//   Entonces, en resumen, este código está verificando si la persona es mayor de edad 
//   utilizando la función validarEdad(). Si la persona no es mayor de edad 
//   (es decir, validarEdad() devuelve false), se establece un mensaje de error personalizado 
//   en el campo del formulario utilizando setCustomValidity().
//
//   Esto es útil para informar al usuario de manera clara y específica que debe 
//   ser mayor de edad para poder completar el formulario o realizar una determinada acción.
//
//En resumen, esta función esMayorDeEdad toma un campo de formulario como entrada, 
//extrae la fecha de nacimiento del valor del campo y la convierte en un objeto Date, 
//y luego llama a la función validarEdad pasándole la fecha de nacimiento como argumento. 
//La función validarEdad probablemente realiza una validación más completa para determinar 
//si el usuario es mayor de edad o no.
export default function esMayorDeEdad(campo) {
    const fechaNacimiento = new Date(campo.value);
    
    if(!validarEdad(fechaNacimiento)) {
        campo.setCustomValidity("Necesitas ser mayor de edad")
    }
}

//*************************************************************************************************** */
//
//function validarEdad(fecha) {
 //   const fechaActual = new Date();
 //   const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(),
 //   fecha.getUTCDate());
 //
 //   return fechaActual >= fechaMas18;
 // }
 //
 //1.-function validarEdad(fecha):
 //   Esta línea define una función llamada validarEdad que recibe un parámetro llamado fecha.
//    Esta fecha probablemente es un objeto Date que representa la fecha de nacimiento del usuario.
//
//2.-const fechaActual = new Date();:
//   Dentro de la función, se declara una constante llamada fechaActual y se le asigna el valor del momento actual, 
//   representado por un nuevo objeto Date.
//
//3.-const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());:
//   Se declara otra constante llamada fechaMas18.
//   Esta constante se crea a partir del objeto fecha (la fecha de nacimiento) y se le suma 18 años.
//   Para calcular la fecha de los 18 años, se utiliza fecha.getUTCFullYear() + 18 para obtener el año, 
//   fecha.getUTCMonth() para obtener el mes y fecha.getUTCDate() para obtener el día.
//
//   fecha.getUTCFullYear(): Esto obtiene el año de la fecha proporcionada, usando el tiempo universal coordinado (UTC). 
//   Es decir, obtiene el año de la fecha sin tener en cuenta la zona horaria.
//   
//   fecha.getUTCMonth(): Esto obtiene el mes de la fecha proporcionada en formato de 0 a 11, 
//   donde 0 representa enero y 11 representa diciembre.
//   
//   fecha.getUTCDate(): Esto obtiene el día del mes de la fecha proporcionada.
//   Entonces, si fecha es una variable que contiene la fecha de nacimiento de una persona, 
//   la línea de código new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate()) 
//   crea una nueva fecha que representa la fecha de nacimiento de esa persona más 18 años.
//   
//   Por ejemplo, si fecha es 01-01-2000, la línea de código creará la fecha 01-01-2018, 
//   que representa la fecha de nacimiento de una persona que tiene 
//   18 años más que la fecha original.
//   
//   En resumen, la línea de código está realizando cálculos en la fecha para obtener 
//   la fecha de nacimiento de una persona que tiene 18 años más que la fecha proporcionada.
//
//4.-return fechaActual >= fechaMas18;:
//   Finalmente, la función validarEdad retorna un valor booleano.
//   Este valor es el resultado de comparar la fechaActual con la fechaMas18.
//   Si la fechaActual es mayor o igual a la fechaMas18, significa que el usuario es mayor de 18 años, 
//   y la función retornará true. De lo contrario, retornará false.
//
//En resumen, esta función validarEdad toma una fecha de nacimiento como entrada, 
//calcula la fecha en la que el usuario cumplirá 18 años y luego compara esa fecha con la fecha actual. 
//Si la fecha actual es mayor o igual a la fecha de los 18 años, la función retorna true, 
//indicando que el usuario es mayor de edad. De lo contrario, retorna false.
//
function validarEdad(fecha) {
    const fechaActual = new Date();

    console.log("fechaActual:" + fechaActual)

    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    console.log("fechaMas18: " + fechaMas18)
    
    return fechaActual >= fechaMas18;
}