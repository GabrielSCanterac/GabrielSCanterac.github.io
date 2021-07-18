//declarand variables para los controles 
var txtNom=document.getElementById("txtNom");
var cboCat=document.getElementById("cboCat");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarProducto(){
    //declaramos una variable para guardar datos
    var listaproducto= Mostrar();
    //selecciono el tbody de lab tabla
    var tbody=document.querySelector('#tbProducto tbody');
    tbody.innerHTML="";
    //agregamos al tbody las filas que se registran 
    for (var i=0;i<listaproducto.length;i++){
        //declaramos una variables para las filas
        var fila=tbody.insertRow(i);
        //declaramosvariables para los titulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        //agreagamos los valores
        titulonom.innerHTML=listaproducto [i].nombre;
        titulocat.innerHTML=listaproducto [i].categoria;
        titulopre.innerHTML=listaproducto [i].precio;
        titulocan.innerHTML=listaproducto [i].cantidad;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarProducto(){
    //validacion de RegistrarDatos
    //capturando valores
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch (indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;    
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    //llamamos al procedimiento registrar

    
    Registrar(nom,cat,pre,can);
    //llamamos al procedimiento para mostrar
    MostrarProducto();

}
//llamamos al procedimiento registrar en el evento del boton 
btnRegistrar.addEventListener("click", RegistrarProducto);