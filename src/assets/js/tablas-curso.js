var modulos = [];

function limpiarModulos() {
    var body_tabla = document.getElementById("body_tabla_modulos");
    var pp = body_tabla.children.length;

    for (var i = 0; i < pp; i++) {
        body_tabla.removeChild(body_tabla.children[0]);
    }
}

function listarModulos() {
    var body_tabla = document.getElementById("body_tabla_modulos");

    limpiarModulos();

    for (var i = 0; i < modulos.length; i++) {
        body_tabla.innerHTML +=
            "<tr>" +
            "<td class='text-center'>" + (i + 1) + "</td>" +
            "<td class='cell-ta'>" + modulos[i][0] + "</td>" +
            "<td class='cell-ta'>" + modulos[i][1] + "</td>" +
            "<td class='text-center'>" +
            "<a id='" + i + "' title='Edit' class='gray-s btn-editarM'><i class='uil uil-edit-alt'></i></a>" +
            "<a id='" + i + "' title='Delete' class='gray-s btn-eliminarM'><i class='uil uil-trash-alt'></i></a>" +
            "</td>"
        "</tr>";
    }

    $(".btn-eliminarM").bind("click", function () {
        var indice_seleccionado = $(this).attr("id");
        console.log(indice_seleccionado);
        console.log(this);
        modulos.splice(indice_seleccionado, 1);
        listarModulos();
    });

    $(".btn-editarM").bind("click", function() {
        var indice_seleccionado = $(this).attr("id");
        console.log(indice_seleccionado);
        console.log(this);
        $("#titulo_modulo").val(modulos[indice_seleccionado][0]);
        $("#desc_modulo").val(modulos[indice_seleccionado][1]);
    });

    
}

function agregarModulos(){
    var titulo = $("#titulo_modulo").val();
    var descripcion = $("#desc_modulo").val();

    modulos.push([titulo, descripcion]);
    listarModulos();
    console.log(modulos);
}

//////////////////////////////////////////////////////////////////////////////

var sesiones = [];

function limpiarSesiones() {
    var body_tabla = document.getElementById("body_tabla_sesiones");
    var pp = body_tabla.children.length;

    for (var i = 0; i < pp; i++) {
        body_tabla.removeChild(body_tabla.children[0]);
    }
}

function listarSesiones() {
    var body_tabla = document.getElementById("body_tabla_sesiones");

    limpiarSesiones();

    for (var i = 0; i < sesiones.length; i++) {
        body_tabla.innerHTML +=
            "<tr>" +
            "<td class='text-center'>" + (i + 1) + "</td>" +
            "<td class='cell-ta'>" + sesiones[i][0] + "</td>" +
            "<td class='cell-ta'>" + sesiones[i][1] + "</td>" +
            "<td class='text-center'>" +
            "<a id='" + i + "' title='Edit' class='gray-s btn-editarS'><i class='uil uil-edit-alt'></i></a>" +
            "<a id='" + i + "' title='Delete' class='gray-s btn-eliminarS'><i class='uil uil-trash-alt'></i></a>" +
            "</td>"
        "</tr>";
    }

    $(".btn-eliminarS").bind("click", function () {
        var indice_seleccionado = $(this).attr("id");
        console.log(indice_seleccionado);
        console.log(this);
        sesiones.splice(indice_seleccionado, 1);
        listarSesiones();
    });

    $(".btn-editarS").bind("click", function() {
        var indice_seleccionado = $(this).attr("id");
        console.log(indice_seleccionado);
        console.log(this);
        $("#titulo_sesion").val(sesiones[indice_seleccionado][0]);
        $("#desc_sesion").val(sesiones[indice_seleccionado][1]);
    });

    
}

function agregarSesiones(){
    var titulo = $("#titulo_sesion").val();
    var descripcion = $("#desc_sesion").val();

    sesiones.push([titulo, descripcion]);
    listarSesiones();
    console.log(sesiones);
}