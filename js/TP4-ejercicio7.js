class agenda {
    #nombre;
    #telefono;
    constructor(
        nombresparam = ['nombre'],
        telefonosparam = ['telefono'],
    )
{
    this.#nombre = nombresparam;
    this.#telefono = telefonosparam;

}

get nombre () {
    return this.#nombre;
}
set nombre (nuevoNombre) {
    if (nuevoNombre.length <=10) {
        
    }
}
aniadirContacto() {
    const nombre = prompt(`ingrese el nombre del contacto`);
    const telefono = prompt(`ingrese el telefono del contacto`);
    this.nombre.push(nombre);
    this.telefono.push(telefono);
    document.write(`Nombre: ${this.nombre}`);
    document.write(`Telefono: ${this.telefono}`);
    
}





}

const nuevocontacto = new agenda;
nuevocontacto.aniadirContacto()
console.log(nuevocontacto.aniadirContacto)
