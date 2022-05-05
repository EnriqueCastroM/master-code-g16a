// TAREAS 


// 1.Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
// "Positivo" si el número es positivo.
// "Negativo" si el número es negativo.
// "Cero" si el número es cero.

//2. Escriba una función para ingresar 
//cualquier letra del alfabeto y verifique 
//si es vocal o consonante

// 3. Realizar un juego de piedra, papel o tijera, en el cual el usuario ingrese
//su nombre y la opcion que quiera.

//4. realizar una funcion con la cual determinen si una cadena de texto es palindromo o no.


// //Ejercicio 1
// function evaluate(numero)
// {
//     return numero < 0? 'Negativo': numero>0? 'Positivo': 'Cero';
    
// }



// //Ejercicio 2
// let vocales = ['a','e','i','o','u'];
// function letter(x){

// for(var i=0; i<vocales.length; i++)

// if(x === vocales[i])
// {
//     return 'Vocal';
// }else{
//     return 'Consonante';
// }
// }

//Ejercicio 3


//Ejercicio 4
    // // Frase insertada porel usuario
    // var fraseUser = prompt("Escribe una frase y sabrás si es un Palindromo",);
    // // Funcion de comparación
    // function frasePalindromo(fraseUser){
    //   // Paso la fraseUser a minusculas y quito espacios
    //   fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
    //   /* Creo otra frase partiendo de la de userFrase pero
    //   la convierto en array, le doy la vuelta al array, lo paso a string*/
    //   fraserReverse=fraseUser.split("").reverse().toString();
    //   // Le quito las "," con un remplace dentro del for
    //   // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
    //   for (var i = 0; i < ((fraserReverse.length)-1); i++) {
    //     fraserReverse=fraserReverse.replace(",","");
    //   };
    //   // Comparo las dos frases.
    //   if(fraseUser==fraserReverse){
    //     // Si el resultado es positivo
    //     resultado="es un Palindromo";
    //   }
    //   else{
    //     // Si el resultado es negativo
    //     resultado="no es un Palindromo";
    //   }
    //   // Muestro el el resultado
    //   document.write("Tu frase "+resultado);
    // }
    // // Llamo a la función comparación con el parámetro del user
    // frasePalindromo(fraseUser);


    //Ejercicio 4 OTRO METODO **TODO: ARREGLAR LOGICA**
    // function palindromo(texto)
    // {
    //     //lectura de la cadena de texto que inicia de izq a derecha
    //     var textoSinEspacios = [];
    //     var indice = 0;
    //     var textoFinal;

    //     for(var i=0; i<texto.length; i++){
    //         if(texto[i] == ''){

    //         }
    //         else{
    //             textoSinEspacios[indice] = texto[i];
    //             indice++;
    //         }
    //     }
    //     //lectura de texto derecha a izquierda
    //     var indiceAlreves = (textoSinEspacios.length - 1);

    //     for(var i=0; i<textoSinEspacios.length; i++){
    //         if(textoSinEspacios[i] != textoSinEspacios[indiceAlreves]){
    //             textoFinal = 'La oracion no es un palindromo';
    //         }
    //         else{
    //             textoFinal ='la oracion es un palindromo';
    //         }
    //     }
        
    //     return textoFinal;
       
    // }

    // var texto = prompt('ingresa una cadena de texto: ');

    // alert(palindromo(texto));