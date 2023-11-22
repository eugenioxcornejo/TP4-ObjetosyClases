class agenda {
    #nombre;
    
    constructor(
        nombresparam = ['nombresbase'],
        telefonosparam = ['3815662665'],
    )
{
    this.#nombre = nombresparam;
    this.telefono = telefonosparam;

}

get nombre () {
    return this.#nombre;
}
set nombre (nuevoNombre) {
    if (nuevoNombre.length <=11) {
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
case '1' :1


let i=0
    do {
        i=i+1;

    
    
    console.log(`i= ${i}`);
    const nombre = prompt('ingrese el nombre del contacto');
    console.log(nombre);
    const telefono = prompt(`ingrese el telefono del contacto`);
    this.#nombre.push(nombre);

    this.telefono.push(telefono);
    
    }
    while(confirm('desea anadir otro contacto?'), (i<10))
    break;
    

    case '2':2

    let existecontacto= prompt('ingrese el nombre a consultar');
     
         
            if( existecontacto === this.#nombre[1]){
                document.write(`el contacto existe`)
                
            } 
            else if(existecontacto === this.#nombre[2]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[3]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[4]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[5]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[6]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[7]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[8]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[9]){
                document.write(`el contacto existe`)
            }
            else if(existecontacto === this.#nombre[10]){
                document.write(`el contacto existe`)
            } else(document.write('el contacto no existe'));
        break;
                       
    case '3' :3
     for(let i=1; i<11; i++ ){
        document.write(`<p/>Nombre${i}: ${this.nombre[i]}</p>`);
    document.write(`<p>Telefono${i}: ${this.telefono[i]}</p>`);

     }
     break;
    

}



}  while (confirm('desea seleccionar otra opcion?')); 
 }}


 







const nuevocontacto = new agenda;
nuevocontacto.agendafuncion()


