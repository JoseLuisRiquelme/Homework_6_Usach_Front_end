
/*
1. Mostrar en consola la secuencia de Fibonacci: 
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.*/

// Función para generar la secuencia de Fibonacci hasta un número máximo
function generarSecuenciaFibonacci(max) {
    let fibonacci = [0, 1];
    let i = 2;
  
    while (fibonacci[i - 1] + fibonacci[i - 2] <= max) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      i++;
    }
  
    return fibonacci;
  }
  
  // Función para filtrar los números pares dentro de una secuencia
  function filtrarNumerosPares(secuencia) {
    return secuencia.filter(function (num) {
      return num % 2 === 0;
    });
  }
  
  // Función para filtrar los números impares dentro de una secuencia
  function filtrarNumerosImpares(secuencia) {
    return secuencia.filter(function (num) {
      return num % 2 !== 0;
    });
  }
  
  // Generar y mostrar la secuencia de Fibonacci
  let secuenciaFibonacci = generarSecuenciaFibonacci(1000);
  console.log("Secuencia de Fibonacci (hasta 1000):", secuenciaFibonacci);
  
  // Filtrar y mostrar los números pares
  let numerosPares = filtrarNumerosPares(secuenciaFibonacci);
  console.log("Números pares (hasta 1000):", numerosPares);
  
  // Filtrar y mostrar los números impares
  let numerosImpares = filtrarNumerosImpares(secuenciaFibonacci);
  console.log("Números impares (hasta 1000):", numerosImpares);

 //2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. //

  let pokemon1 = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
  ];
  
  let pokemonMayusculas = pokemon1.map(function(pokemon1) {
    return pokemon1.toUpperCase();
  });
  
  console.log(pokemonMayusculas);
  
  /*3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo 
fuego. */

  let pokemon = [
    {
      nombre: 'Pikachu',
      tipo: 'Electrico'
    },
    {
      nombre: 'Charmander',
      tipo: 'Fuego',
    },
    {
      nombre: 'Bulbasaur',
      tipo: 'Planta'
    },
    {
      nombre: 'Squirtle',
      tipo: 'Agua'
    },
    {
      nombre: 'Charmeleon',
      tipo: 'Fuego'
    },
    {
      nombre: 'Weedle',
      tipo: 'bicho'
    },
    {
      nombre: 'Charizard',
      tipo: 'Fuego'
    }
  ];
  
  let pokemonTipoFuego = pokemon.filter(function(pokemon) {
    return pokemon.tipo === 'Fuego';
  });
  
  console.log(pokemonTipoFuego);