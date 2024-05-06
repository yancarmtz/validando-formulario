//La línea export default function esUnCuil(campo) es una declaración de una función 
//en JavaScript que se exporta como el valor predeterminado del archivo 
//en el que se encuentra. Aquí está el desglose:
//
// export default: Esta es una declaración de exportación en JavaScript que se utiliza 
//para exportar un valor por defecto desde un archivo. En este caso, la función esUnCuil
//se exporta como el valor predeterminado del archivo en el que se encuentra.
//Esto significa que cuando este archivo se importa en otro lugar, 
//la función esUnCuil estará disponible como el valor predeterminado de ese archivo.
//
// function esUnCuil(campo): Esta es la declaración de la función en sí. 
//La palabra clave function se utiliza para definir una función en JavaScript. 
//En este caso, la función se llama esUnCuil y toma un parámetro llamado campo. 
//Esto significa que cuando llames a la función esUnCuil, 
//puedes pasarle un valor como argumento que se asignará al parámetro campo dentro de la función.
//
//En resumen, la línea export default function esUnCuil(campo) declara una función llamada
//esUnCuil que se exporta como el valor predeterminado del archivo en el que se encuentra, 
//lo que la hace accesible para su uso en otros archivos cuando se importa.
export default function esUnCuil(campo){

//************************************************************************************************************************************************ */
    //
    // campo.value.replace(/[-\/]/g, ""): 
    //La expresión campo.value.replace(/[-\/]/g, "") se utiliza para eliminar los guiones
    //y barras de un valor de campo en JavaScript. Aquí está el desglose:
    //
    // campo.value: Esto se refiere al valor del campo en el que se está trabajando. 
    //Por ejemplo, si estás validando un campo de texto en un formulario, 
    //campo.value sería el valor que el usuario ha ingresado en ese campo.
    //
    // .replace(): Este es un método de JavaScript que se utiliza para buscar 
    //un patrón específico en una cadena y reemplazarlo por otro valor.
    //
    // /[-\/]/g: Esta es una expresión regular que se utiliza como patrón de búsqueda. 
    //En este caso, la expresión regular busca tanto guiones como barras en el valor del campo. 
    //El guion (-) y la barra (/) están entre corchetes, lo que significa que estamos buscando 
    //cualquiera de esos dos caracteres. La "g" al final de la expresión regular significa 
    //que la búsqueda se realizará de forma global en toda la cadena, 
    //no solo en la primera coincidencia.
    //
    // ""  Este es el valor por el que se reemplazarán los guiones y barras encontrados 
    //en el valor del campo. En este caso, se reemplazarán por un string vacío,
    //es decir, se eliminarán del valor del campo.
    //
    //Entonces, en resumen, la expresión campo.value.replace(/[-\/]/g, "") busca todos los guiones y 
    //barras en el valor del campo y los reemplaza por un string vacío, 
    //lo que efectivamente elimina esos caracteres del valor del campo.
    const cuil = campo.value.replace(/\-/g, "");
    
    if(tieneNumerosRepetidos(cuil)) {
        console.log("Valores repetidos");
        campo.setCustomValidity("Valores repetidos");
    } else {
        if(validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)) {
            console.log("Cuil valido");
        } else {
            console.log("Cuil no existe");
            campo.setCustomValidity("Cuil no existe");
        }

    }
}


function tieneNumerosRepetidos(cuil){
    const numerosRepetidos = ["00000000000",
                              "11111111111",
                              "22222222222",
                              "33333333333",
                              "44444444444",
                              "55555555555",
                              "66666666666",
                              "77777777777",
                              "88888888888",
                              "99999999999",
                             ];

    return numerosRepetidos.includes(cuil);
}


function validarPrimerosDigitos(cuil) {

    //esta siguiente línea de código utiliza el método substring para extraer los dos primeros
    //dígitos del número de CUIL. La variable cuil contiene el número completo del CUIL,
    //y al utilizar substring(0,2) estamos indicando que queremos extraer los caracteres
    //desde la posición 0 hasta la posición 2 (sin incluir la posición 2), 
    //es decir, los dos primeros dígitos. Por lo tanto, 
    //la variable primerosDigitos contendrá esos dos primeros dígitos del CUIL.
    let primerosDigitos = cuil.substring(0,2);
    
    //****************************************************************************** */
    //
    //En la primera línea de código, se define un array llamado digitosValidos que contiene 
    //los valores específicos correspondientes a los dos primeros dígitos válidos de un CUIL en Argentina.
    //
    //En la segunda parte, se utiliza el método includes para verificar si los dos primeros dígitos extraídos
    //del CUIL se encuentran dentro del array de dígitos válidos. La expresión 
    //digitosValidos.includes(primerosDigitos) devuelve true si los primeros dígitos 
    //extraídos se encuentran dentro del array de dígitos válidos, y false en caso contrario.
    //
    //En resumen, esta parte del código verifica si los dos primeros dígitos del CUIL 
    //son válidos según los valores establecidos en el array digitosValidos.
    //
    let digitosValidos = ['20', '23', '24', '27', '30', '33', '34'];

    return digitosValidos.includes(primerosDigitos);
}

//************************************************************************************************** */
//
//1.-Inicialización de variables:
//   acumulado: Esta variable se inicializa en 0 y se utilizará para almacenar la suma de los productos entre cada 
//   dígito del CUIL y su factor correspondiente.
//
//   factores: Este es un arreglo que contiene los 10 factores a utilizar en el cálculo del dígito verificador.
//
//2.-Cálculo del acumulado:
//   Se itera sobre los 10 primeros dígitos del CUIL (índices del 0 al 9).
//
//  Para cada dígito, se realiza la siguiente operación:
//
//  Se convierte el dígito a un número entero utilizando parseInt(cuil[i], 10). El segundo parámetro 10 indica que se debe 
//  interpretar el número en base 10 (decimal).
//
//  Se multiplica el dígito por su factor correspondiente en el arreglo factores.
//
//  El resultado de la multiplicación se suma a la variable acumulado.
//
//3.-Cálculo del validador teórico:
//   Se calcula el validadorTeorico restando 11 del residuo de la división de acumulado entre 11.
//
//   Si el validadorTeorico es 11, se le asigna el valor 0.
//
//   Si el validadorTeorico es 10, se le asigna el valor 9.
//
//4.-Extracción del dígito verificador:
//   Se extrae el último dígito del CUIL (el dígito verificador) y se lo convierte a entero utilizando parseInt(cuil[10],  10).
//
//5.-Comparación y resultado:
//   Finalmente, se compara el dígito verificador extraído con el validadorTeorico calculado.
//
//   Si son iguales, la función devuelve true, indicando que el CUIL es válido.
//
//   Si son diferentes, la función devuelve false, indicando que el CUIL no es válido.
//
//En resumen, esta función implementa el algoritmo de cálculo del dígito verificador del CUIL, 
//que es una forma de validar la integridad de un número de CUIL. El algoritmo se basa en una serie 
//de operaciones matemáticas y comparaciones para determinar si el dígito verificador es correcto o no.
//
function validarDigitoVerificador(cuil) {
    let acumulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2];

    for(let i = 0; i < 10; i++) {
        acumulado += parseInt(cuil[i],10) * factores[i];
    }

    let validadorTeorico = 11 - (acumulado % 11); 

    if(validadorTeorico == 11) {
       validadorTeorico = 0
    } else if (validadorTeorico == 10 ) {
       validadorTeorico = 9   
    }

    const digitoVerificador = parseInt(cuil[10],10);

    return digitoVerificador === validadorTeorico;
}