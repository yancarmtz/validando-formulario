//ARREGLO:::::::::::::::::
export const tiposError = [
    "valueMissing", 
    "typeMissmatch",
    "patternMissmatch", 
    "tooShort", 
    "customError"
];


//OBJETO MENSAJE::::::::::::::::
export const mensajes = {
    nombre: { // <= OBJETO
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: { //<= OBJETO
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
    },
    identificacion: { //<= OBJETO
      valueMissing: "El campo identificación no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un número de identificación válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    cuil: { //<= OBJETO
      valueMissing: "El campo cuil/cuit no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
      customError: "El cuil/cuit ingresado no existe.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    fecha_nacimiento: { //<= OBJETO
      valueMissing: "El campo fecha nacimiento no puede estar vacío.",
      customError: "Debes ser mayor de 18 años para registrarte.",
    },
    terminos: { //<= OBJETO
      valueMissing: "Debes aceptar los términos antes de continuar.",
    },
  };
  