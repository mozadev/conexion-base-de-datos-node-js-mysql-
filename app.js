var mysql= require('mysql')

var conexion =mysql.createConnection({

    // establecemos los parametros de conexion
host:'localhost',
database:'tiendaDeportiva',
user:'root',
password:'',

});

//definimos un funcion para que nos muestre un error en caso de que exista
conexion.connect(function(error){
    // si existe el error lo captura 
if(error){
    throw error;
}else{ // en caso de que no, que nos  muestre el mensaje
    console.log('CONEXION REALIZADA');
}

});

// realizamos la consulta 
conexion.query('SELECT * FROM productosdeportivos',function(error, filas){
if(error){
    throw error;
}else{
    filas.forEach(fila => { // recorremos la tabla e imprimimos fila por fila
        console.log(fila);
});
}
});


