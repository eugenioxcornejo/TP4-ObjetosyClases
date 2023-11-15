const auto = {

color: 'negro',
tipo:'sedan',
marca: 'Mercedes Benz',
modelo:'190 Evo II',

encender: function (){
    document.write(`<p>Auto Encendido</p>`);

},

apagar: function () {
    document.write(`<p> El auto se apago</p>`)
},


}

auto.encender();
auto.apagar();