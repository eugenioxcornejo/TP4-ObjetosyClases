class agenda {
    #nombre;
    
    constructor(
        nombresparam = [],
        telefonosparam = [],
    )
{
    this.#nombre = nombresparam;
    this.telefono = telefonosparam;

}

get nombre () {
    return this.#nombre;
}
set nombre (nuevoNombre) {
    if (nuevoNombre.length <=10) {
        this.#nombre = nuevoNombre;
        } else{
            alert('la agenda esta ompleta');
        }
}
agendafuncion() {
do {
    let opcion = prompt ('Seleccione una opcion: 1-anadir un contacto 2-existe contacto? 3- listar contactos 4-buscar contacto 5-eliminar contacto  6-agenda llena? 7-cantidad de espacios libres')
console.log(opcion.toLocaleLowerCase());
    opcion= opcion.toLocaleLowerCase();


switch(opcion){
case '1' :
    
    do {
        let i=1;
    i=i+1;
    const nombre = prompt(`ingrese el nombre del contacto`);
    const telefono = prompt(`ingrese el telefono del contacto`);
    this.#nombre.push(nombre);
    this.telefono.push(telefono);
    document.write(`<p/>Nombre: ${this.nombre[i]}</p>`);
    document.write(`<p>Telefono: ${this.telefono[i]}</p>`);
    }
    while(confirm('desea anadir otro contacto?'))
    break;
    
    
}
}
while (confirm('desea seleccionar otra opcion?'));


}}


 







const nuevocontacto = new agenda;
nuevocontacto.agendafuncion()


