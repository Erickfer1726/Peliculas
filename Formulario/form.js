function traerdatos() {
    const nombre = document.getElementById('nombre1').value;
    const apellido = document.getElementById('APELLIDO1').value;
    const telefono = Number(document.getElementById('telefono1').value);
    const direccion = document.getElementById('direccion1').value;
    const observacion = document.getElementById('observaciones1').value;

    const usuario = {
        nombre,
        apellido,
        telefono,
        direccion,
        observacion
}
console.log(usuario)
localStorage.setItem('usuario', JSON.stringify(usuario))
alert('Registro Exitoso')


}