window.addEventListener("load", function(event) {
  console.log("'Todos los recursos terminaron de cargar!");
  var uActivo = localStorage.getItem("uActivo"); //Obtener datos de localStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }

    var d = JSON.parse(uActivo[0]);

    console.log(d.nombres);

    $("#nom").text(d.nombres);
});
