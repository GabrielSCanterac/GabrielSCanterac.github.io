//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementsById("rbMas");
var rbFem=document.getElementsById("rbFem");
var rbOtr=document.getElementsById("rbOtr");
var chkEst=document.getElementById("chkEst");

//creamos procedimientos para validar
//nombre
function ValidarNombre() {
    if (txtNom.value== ""|| txtNom.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>Por favor Ingrese sus nombres</li>";
    }else{
        error.style.display="none"
    }
}
//apellido
function ValidarApellido() {
    if (txtApe.value== ""|| txtApe.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>Por favor Ingrese sus apellidos</li>";
    }else{
        error.style.display="none"
    }
}

//correo
function ValidarCorreo() {
    if (txtCor.value== ""|| txtCor.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>Por favor Ingrese su correo</li>";
    }else{
        error.style.display="none"
    }
}

//sexo
function ValidarSexo() {
    if (rbMas.checked== false && rbFem.checked==false && rbOtr.checked==false) {
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo</li>";
    }else{
        error.style.display="none"
    }
}

//Estado 
function ValidarEstado() {
    if (chkEst.checked== false) {
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo el estado</li>";
    }else{
        error.style.display="none"
    }
}

//creamos un procedimiento para validar 
function Validar() {
    //reiniciamos el estilo error
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
    error.innerHTML+="<li>"+m+"</li>"
}

//creamos una funcion registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if (txtNom.value=="" ||txtNom.value==null ) {
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor ingresa un sexo");
        LlamarClase("Por favor ingresa el estado");
        txtNom.focus();
    }else if (txtApe.value=="" ||txtApe.value==null ){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor ingresa un sexo");
        LlamarClase("Por favor ingresa el estado");
        txtApe.focus();
    }else if (txtCor.value=="" ||txtCor.value==null ) {
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor ingresa un sexo");
        LlamarClase("Por favor ingresa el estado");
        txtCor.focus();
    } else if (rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false) {
        LlamarClase("Por favor ingresa un sexo");
        LlamarClase("Por favor ingresa el estado");
        rbMas.focus();
    }else if (chckEst.checked==false) {
        LlamarClase("Por favor ingresa el estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML="";
    }
}