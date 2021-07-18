var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarAlumno(){
    // declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    // selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // agregamos al tbody las filas que se registren
    for(var i=0;i<listaalumno.length;i++){
        // declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        // declaramos las variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        // agregamos los valores
        titulonom.innerHTML=listaalumno[i].nombres;
        tituloape.innerHTML=listaalumno[i].apellidos;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

// creamos un procedimiento para registrar los datos
function RegistrarAlumno(){
    // validacion de datos
    if(txtNom.value==""){
        alert("Ingresa tu nombre");
        txtNom.focus();
    }else if(txtApe.value==""){
        alert("Ingresa tus apellidos");
        txtApe.focus();
    }else if(txtDni.value==""){
        alert("Ingresa tu DNI");
        txtDni.focus();
    }else if(cboCurso.selectedIndex==0){
        alert("Selecciona un curso");
        cboCurso.focus();
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        alert("Selecciona un turno");
        rbM.focus();
    }else if(chkEst.checked==false){
        alert("Selecciona el estado");
        chkEst.focus();
    }else{
        
        // capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var dni=txtDni.value;
        var cur="";
        var indice=cboCurso.selectedIndex;
        switch(indice){
            case 1:
                cur="Diseño Web";
                break;
            case 2:
                cur="Base de datos";
                break;
            case 3:
                cur="Programacion Java";
                break;
            default:
                cur="";
                break;   
        }
        var tur="";
        if(rbM.checked){
            tur="Mañana";
        }else if(rbT.checked){
            tur="Tarde";
        }else if(rbN.checked){
            tur="Noche";
        }
        var chk="";
        if(chkEst.value){
            chk="Habilitado"
        }
        // llamamos al procedimiento registrar
        Registrar(nom,ape,dni,cur,tur,chk);
        // llamamos al procedimiento para mostrar
        MostrarAlumno();
    }  
}

// llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarAlumno);