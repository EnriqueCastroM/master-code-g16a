function Registrar(){
    let nombre = documento.getElementById('nombre');
    let apellido = documento.getElementById('apellido');
    let direccion = documento.getElementById('direccion');
    let celular = documento.getElementById('celular');
    let edad = documento.getElementById('edad');
    let fechaNacimiento = documento.getElementById('fecnac');
    let m = document.getElementById('m');
    let f = document.getElementById('f');
    let o = document.getElementById('o');
    let otro = document.getElementById('otro');
    let acepto = document.getElementById('acepto');
    let genero, terminos;

    //valido el genero
    if(m.checked === true){
        genero = 'Masculino'
    }else if(f.checked === true){
        genero = 'Femenino'
    }else{
        genero = otro.value;
    }
    //valido si acepta terminos
    if(acepto.checked === true){
        terminos = 'Si';
    }else{
        alert('Para registrarte debes aceptar los terminos');
    }




}

