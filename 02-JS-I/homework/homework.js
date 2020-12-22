// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Carlos';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 20;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  let nombre = str;
  return nombre;
}

devolverString('Jose');



function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let sumar = x + y;

  return sumar;  
}

suma(6,8);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let restar = x - y;
  return restar;
}

resta(8,6);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:

  let multiplicar = x * y;

  return multiplicar;
}

multiplica(2,5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

  let dividir = x / y;
  
  return dividir;
}

divide(20,5);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y){
    return true;
  }else{
    return false;
  };
};

sonIguales(2,2);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length === str2.length){
    return true;
  }else{
    return false;
  };
};

tienenMismaLongitud('casa','Mark');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }else{
    return false;
  }
}
menosQueNoventa(80);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true;
  }else{
    return false;
  };
};

mayorQueCincuenta(55);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y;
  
  return resto;
}

obtenerResto(8, 3);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num % 2 == 0 ){
    return true;
  }else{
    return false;
  };
};

esPar(20);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 !== 0){
    return true;
  }else{
    return false;
  };
};

esImpar(3);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = num * num;

  return cuadrado;
}

elevarAlCuadrado(3);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo = num * num * num;

  return cubo;
}

elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let exponente = Math.pow(num, exponent);

  return exponente;
}

elevar(3,4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redondeo = Math.round(num);

  return redondeo;
}

redondearNumero(6.7);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
   let redondeoup = Math.ceil(num);

   return redondeoup;

};

redondearHaciaArriba(9.4);


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
   let texto = str + '!';

   return texto;
}

agregarSimboloExclamacion('Bienvenido');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combinado = nombre + ' ' + apellido;
  
  return combinado;
}

combinarNombres('Martin', 'Lorenzi');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo = 'Hola ' + nombre + '!';
  
  return saludo;
}

obtenerSaludo('Martin')

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let arearec = alto * ancho;

  return arearec;
}

obtenerAreaRectangulo(10, 5);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
