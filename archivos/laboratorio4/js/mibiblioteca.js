//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

//creamos un procedimiento para validar
//Nombre
function validarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombress</li>";
    }else{
        error.style.display="none";
    }
}
//apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innertHTML+="<li>Por favor ingrese sus apellidos</li>";
    }else{
        error.style.display="none";
    }
}

//correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>";
    }else{
        error.style.display="none";
    }
}

//sexo
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li> Por favor seleccione el estado</li>";
    }else{
        error.style.display="none";
    }
}

//creamos un procedimiento para validar
function validar(){
// reiniciamos el estilo error
error.innerHTML="";
//llamamos a los procedimientos para validar
ValidarNombre();
ValidarApellido();
ValidarCorreo();
ValidarSexo();
ValidarEstado();
}

//creamos un procedimiento para asignar la clase error 
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>";
}

//creamos una funcion Registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona un estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado")
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona un estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor selecciona el estado");
        chkEst.focus();
    }else{
        alert("Se registro Correctamente");
        error.innerHTML="";
    }
}