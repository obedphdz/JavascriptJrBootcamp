let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i=0;i<cantidad;i++){
    alumnosTotales[i]=[prompt("Nombre alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[i][1]++;
    }
}