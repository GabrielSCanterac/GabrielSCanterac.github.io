// declarando variables 
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//creamos un procedimiento para Limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
// Creamos un procedimiento para validar el usuario
function ValidarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese sus correo");
        txtCor.focus();
    }else if(txtCon.value==""|| txtCon.value==null){
        alert("ingrese contraseña");
        txtCon.focus();
    }else{
        // Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        auth.signInWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Bienvenidos al sistema");
    window.location="pagina11.html";
  })
  .catch((error) => {
    alert("usuario o contraseña no valida");
    Limpiar();
    
  });
    }
}
// llamamos al p
// rocedimiento boton
btnRegistrar.addEventListener("click",ValidarUsuario);