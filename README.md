Desarrollo de un servidor con Express que utilice el paquete pg para
conectarse con PostgreSQL y utilice funciones asíncronas para hacer las consultas a la base
de datos.
El servidor desarrolla las siguientes rutas:
● POST /cancion: Recibe los datos correspondientes a una canción y realiza la inserción
en la tabla canciones.
● GET /canciones: Devuelve un JSON con los registros de la tabla canciones.
● PUT /cancion: Recibe los datos de una canción que se desea editar y ejecuta una
función asíncrona para hacer la consulta SQL y actualice ese registro de la tabla
canciones.
● DELETE /cancion: Recibe por queryString el id de una canción y realiza una consulta
SQL a través de una función asíncrona para eliminarla de la base de datos.
