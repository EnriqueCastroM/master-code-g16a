//#region Definicion de la clase cuenta

class Cuenta {
    constructor(nombre,saldo)
    {
        this.nombre = nombre;
        this.saldo = saldo;                
    }
}

let cuenta1 = new Cuenta ('Mali', 200);
let cuenta2 = new Cuenta ('Gera', 290);
let cuenta3 = new Cuenta ('Maui', 67);
let cuentas = [cuenta1, cuenta2, cuenta3];
//#endregion

//#region FUNCIONES PARA EL LOGIN DE LAS CUENTAS

function login1(form){
    let opciones = document.getElementById('operacionesSaldos');
    if (form.u.value=="enrique") {
        if (form.c.value=="123") {
            opciones.style.display = 'inline-block';
            form.style.display = 'none';
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

//FUNCION PARA EL LOGIN
function login2(form){
    let opciones = document.getElementById('operacionesSaldos');
    if (form.u.value=="enrique") {
        if (form.c.value=="123") {
            opciones.style.display = 'inline-block';
            form.style.display = 'none';
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

//FUNCION PARA EL LOGIN
function login3(form){
    let opciones = document.getElementById('operacionesSaldos');
    if (form.u.value=="enrique") {
        if (form.c.value=="123") {
            opciones.style.display = 'inline-block';
            form.style.display = 'none';
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

//#endregion

//#region Cuenta 1
function obtenerSaldo1(){
    alert('El saldo de la cuenta de '+ cuenta1.nombre + ' es: ' + cuenta1.saldo);
}

function ingresarMonto1(){
    let inputIngresarMontoBoton = document.getElementById('Agregar');
    let inputIngresarMontoNumero = document.getElementById('ingresarSaldo');
    inputIngresarMontoBoton.style.display = 'inline-block';
    inputIngresarMontoNumero.style.display = 'inline-block';
}

function retirarMonto1(){
    let inputRetirarMontoBoton = document.getElementById('Retirar');
    let inputRetirarMontoNumero = document.getElementById('retirarSaldo');
    inputRetirarMontoBoton.style.display = 'inline-block';
    inputRetirarMontoNumero.style.display = 'inline-block';
}

function sumarMonto1(){
    let valorSaldo = parseInt(document.getElementById('ingresarSaldo').value)

    if(cuenta1.saldo + valorSaldo <= 990){
        cuenta1.saldo = cuenta1.saldo + valorSaldo;
        alert('El monto agregado:' + valorSaldo + 'Saldo total:' + cuenta1.saldo);
        return cuenta1.saldo;
    }else{
        alert('Esta cuenta ha alcanzado el saldo máximo permitido.')
        
    }

}

function restarMonto1(){
    let valorSaldo = parseInt(document.getElementById('retirarSaldo').value)
    if(cuenta1.saldo - valorSaldo >= 10){
        cuenta1.saldo = cuenta1.saldo - valorSaldo;
        alert('El monto retirado: ' + valorSaldo + 'Saldo total: ' + cuenta1.saldo);
        return cuenta1.saldo;
    }else{
        alert('Esta cuenta requiere más saldo para realizar la operación');
        
    }

}



//#endregion

//#region Cuenta 2
function obtenerSaldo2(){
    alert('El saldo de la cuenta de '+ cuenta2.nombre + ' es: ' + cuenta2.saldo);
}

function ingresarMonto2(){
    let inputIngresarMontoBoton = document.getElementById('Agregar');
    let inputIngresarMontoNumero = document.getElementById('ingresarSaldo');
    inputIngresarMontoBoton.style.display = 'inline-block';
    inputIngresarMontoNumero.style.display = 'inline-block';
}

function retirarMonto2(){
    let inputRetirarMontoBoton = document.getElementById('Retirar');
    let inputRetirarMontoNumero = document.getElementById('retirarSaldo');
    inputRetirarMontoBoton.style.display = 'inline-block';
    inputRetirarMontoNumero.style.display = 'inline-block';
}

function sumarMonto2(){
    let valorSaldo = parseInt(document.getElementById('ingresarSaldo').value)

    if(cuenta2.saldo + valorSaldo <= 990){
        cuenta2.saldo = cuenta2.saldo + valorSaldo;
        alert('El monto agregado:' + valorSaldo + 'Saldo total:' + cuenta2.saldo);
        return cuenta2.saldo;
    }else{
        alert('Esta cuenta ha alcanzado el saldo máximo permitido.')
        
    }

}

function restarMonto2(){
    let valorSaldo = parseInt(document.getElementById('retirarSaldo').value)
    if(cuenta2.saldo - valorSaldo >= 10){
        cuenta2.saldo = cuenta2.saldo - valorSaldo;
        alert('El monto retirado: ' + valorSaldo + 'Saldo total: ' + cuenta2.saldo);
        return cuenta2.saldo;
    }else{
        alert('Esta cuenta requiere más saldo para realizar la operación');
        
    }

}



//#endregion

//#region Cuenta 3
function obtenerSaldo3(){
    alert('El saldo de la cuenta de '+ cuenta3.nombre + ' es: ' + cuenta3.saldo);
}

function ingresarMonto3(){
    let inputIngresarMontoBoton = document.getElementById('Agregar');
    let inputIngresarMontoNumero = document.getElementById('ingresarSaldo');
    inputIngresarMontoBoton.style.display = 'inline-block';
    inputIngresarMontoNumero.style.display = 'inline-block';
}

function retirarMonto3(){
    let inputRetirarMontoBoton = document.getElementById('Retirar');
    let inputRetirarMontoNumero = document.getElementById('retirarSaldo');
    inputRetirarMontoBoton.style.display = 'inline-block';
    inputRetirarMontoNumero.style.display = 'inline-block';
}

function sumarMonto3(){
    let valorSaldo = parseInt(document.getElementById('ingresarSaldo').value)

    if(cuenta3.saldo + valorSaldo <= 990){
        cuenta3.saldo = cuenta3.saldo + valorSaldo;
        alert('El monto agregado:' + valorSaldo + 'Saldo total:' + cuenta3.saldo);
        return cuenta3.saldo;
    }else{
        alert('Esta cuenta ha alcanzado el saldo máximo permitido.')
        
    }

}

function restarMonto3(){
    let valorSaldo = parseInt(document.getElementById('retirarSaldo').value)
    if(cuenta3.saldo - valorSaldo >= 10){
        cuenta3.saldo = cuenta3.saldo - valorSaldo;
        alert('El monto retirado: ' + valorSaldo + 'Saldo total: ' + cuenta3.saldo);
        return cuenta3.saldo;
    }else{
        alert('Esta cuenta requiere más saldo para realizar la operación');
        
    }

}



//#endregion
