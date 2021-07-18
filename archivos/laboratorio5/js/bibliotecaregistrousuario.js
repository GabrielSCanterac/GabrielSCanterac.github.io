// Declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

// Creamos una funcion para limpiar las cajas
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

// Creamos un procedimiento para registrar el usuario
function RegistrarUsuario(){
    if (txtCor.value=="" || txtCor.value==null){
    alert("Ingresa el correo");
    txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
    alert("Ingrese la contraseña");
    txtCon.focus();
    }else{
    // Capturando valores
    var cor=txtCor.value;
    var con=txtCon.value;
    // Llamamos ala funcion de Firebase para crear usuarios
    auth.createUserWithEmailAndPassword(cor, con).then((userCredential) => {
    // Signed in
    alert("Se registro el usuario en Firebase");
    Limpiar();
})
.catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
});
}
}

// Llamamos al procedimienton en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);