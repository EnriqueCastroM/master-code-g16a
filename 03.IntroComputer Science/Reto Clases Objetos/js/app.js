class Alumno {
    constructor(nombre, apellido, inscrito, ...calificacion) {
       this.nombre = nombre
       this.apellido = apellido
       this.inscrito = inscrito
       this.calificacion = calificacion
       this.materia
    }



    agregarCalificación(materia, promedio){
    
        this.materia.push({materia : materia, calificación: calficacion})
    }

    estarInscrito() {
        
        if(this.inscrito == true) //es true o false
        {
            console.log("El alumno está inscrito");
            
        }            
        else{
            console.log("El alumno no está inscrito");  
            
        }
    }
    
    sacarPromedio(){
        let numeros = this.calificacion, suma=0, promedio;
        numeros.forEach (function(numero){
            suma += numero;
            promedio = suma/5;
        });
        //console.log(suma);
        console.log(promedio);
        return promedio;
               
    }

    ObtenerInicialesDeAlumno(){
        
       let inicial = this.nombre.charAt(0);// Retorna ""
       console.log(inicial);
       return inicial;
    }

    ObtenerNombreCompleto(){
        let nombreCompleto = (this.nombre + ' ' + this.apellido);
        //return nombreCompleto;
        console.log(nombreCompleto);
    }

    aprobado(){
        let numeros = this.calificacion, suma=0, promedio;
        numeros.forEach (function(numero){
            suma += numero;
            promedio = suma/5;
        });
        if(promedio>=60){
            console.log('aprobado');
            return 'Aprobado';
        }
        else{
            console.log('reprobado');
            return 'Reprobado'
        }
    }
}

let Alumno1 = new Alumno ('Enrique', 'Castro', false, 80, 50, 70, 99, 84);



