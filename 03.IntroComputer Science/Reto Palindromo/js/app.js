  
function Palindromo()
{
let inputText = document.getElementById('texto').value;
let texto = [];
texto.push(inputText);

let textoSinEspacios = [];
let indice = 0;
var textoFinal;

for(var i=0; i<texto.length; i++){
if(texto[i] == ''){

}
else{
textoSinEspacios[indice] = texto[i];
indice++;
}
}
var indiceAlreves = (textoSinEspacios.length - 1);

         for(var i=0; i<textoSinEspacios.length; i++){
             if(textoSinEspacios[i] != textoSinEspacios[indiceAlreves]){
                 textoFinal = 'La oracion no es un palindromo';
             }
             else{
                 textoFinal ='la oracion es un palindromo';
             }
         }
        
         console.log(textoSinEspacios);
       
}


  