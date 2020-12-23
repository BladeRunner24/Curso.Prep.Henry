// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const nombres = array;

  return nombres[0];
}

devolverPrimerElemento(['Miguel', 'Fernando', 'Oscar']);



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const nombre = array;
  const ultimo = array.length - 1;

  return nombre[ultimo];
}

devolverUltimoElemento(['Miguel', 'Fernando', 'Oscar']);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const nombre = array;

  return array.length;
}

obtenerLargoDelArray(['Miguel', 'Fernando', 'Oscar']);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const numeros = array;

  for( i = 0; i < numeros.length; i++){

    numeros[i] = numeros[i] + 1;

  };
  return numeros;
};

incrementarPorUno([2, 6, 8, 12]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const nombre = array;

  nombre.push(elemento);

  return nombre;
};

agregarItemAlFinalDelArray(['Miguel', 'Fernando', 'Oscar'], 'Martin');

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const nombre = array;

  nombre.unshift(elemento);

  return nombre;
};

agregarItemAlComienzoDelArray(['Miguel', 'Fernando', 'Oscar'], 'Martin');

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  const frase = palabras;

  let frasecompleta = palabras.join(' ');

  return frasecompleta;
}

dePalabrasAFrase(['Bienvenido', 'a', 'mi', 'Landing', 'page']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  const encontrar = array.find(e => e === elemento);
  if(encontrar !== undefined){
    return true;
  }else{
    return false;
  };
};

arrayContiene(['Miguel', 'Fernando', 'Oscar'], 'Martin');

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = numeros.reduce(function(a,b){
    return a + b; 
  });

  return suma;
};

agregarNumeros([2, 6, 8, 12]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = 0;
  
  for(i = 0; resultadosTest.length - 1; i++) {

    total += resultadosTest[i]; 

  };

  let suma = total / resultadosTest.length;

  return suma;
   
};

promedioResultadosTest([2, 5, 8, 8, 9, 4]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

var n= 0;

for (i=0; i<=n; i++){
    if (numeros[i] > n) {

        var n = array[i];
    };
};

return n;
};

numeroMasGrande([2, 5, 8, 8, 9, 4]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
