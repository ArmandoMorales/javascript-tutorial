"use strict"

// Formas de declarar un array
var saludo = [ "Hola", "Mundo" ];
var lenguajes = new Array( "php", "js", "go" );

// Acceder a un elemento deacuerdo a la posicion
console.log( "saludo[0]:", saludo[0] );
console.log( "lenguajes[2]:", lenguajes[2] );

// Numero de elementos de un array
console.log( "saludo.length:", saludo.length );
console.log( "lenguajes.length:", lenguajes.length );

// Recorrer un array ( index y arreglo son opcionales )
lenguajes.forEach( function( elemento, index, arreglo ) 
{
   console.log( elemento, index, arreglo );
});
