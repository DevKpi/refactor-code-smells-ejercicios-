function procesarAlumno(alumno) {

    if (!alumno.nombre || alumno.nota < 1 || alumno.nota > 10) {
        return "Datos inválidos";
    }

    let estado;

    if (alumno.nota >= 4) {
        estado = "Aprobado";
    } else {
        estado = "Desaprobado";
    }

    console.log(alumno.nombre + ": " + estado);

    localStorage.setItem("ultimoAlumno",JSON.stringify(alumno));

    return estado;
}

// Identificar las diferentes responsabilidades.
// Luego intentar separar:
// validarAlumno()
// obtenerEstado()
// mostrarResultado()
// guardarAlumno()

function validarAlumno(alumno) {
    if (!alumno.nombre || alumno.nota < 1 || alumno.nota > 10) {
        return false;
    }
    return true;
}

function obtenerEstado(nota) {
    if (nota >= 4) {
        return "Aprobado";
    } else {
        return "Desaprobado";
    }
}

function mostrarResultado(nombre, estado) {
   return console.log(nombre + ": " + estado);
}

function guardarAlumno(alumno) {
    localStorage.setItem("ultimoAlumno", JSON.stringify(alumno));
    console.log("Alumno guardado en localStorage");
}