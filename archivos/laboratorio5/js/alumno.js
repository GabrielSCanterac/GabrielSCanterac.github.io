// crear un vector que contenga la informacion del registro
var alumno=[]
// creamos un procedimiento para poder registrar
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno){
    var NuevoAlumno={
        nombres:nomalumno,
        apellidos:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno
    };
    alumno.push(NuevoAlumno);
}

// creamos una funcion para mostrar la informacion del registro
function Mostrar(){
    return alumno;
}