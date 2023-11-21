class Rectangulo {
    constructor(
        largoparam,
        anchoparam,
        
    )
    {

    this.largo = largoparam;
    this.ancho = anchoparam;
    
    }
    cambiarlargo () {
        console.log(`${this.largo}`);
        document.write(`<h2>El Largo es ${this.largo}</h2>`);
    }
    cambiarancho (){
        document.write(`<h2>EL ancho es ${this.ancho}</h2>`);
    }

    perimetro (){
        const perimetroparam=(2*((this.ancho)+(this.largo)));
        document.write(`<h2>El perimetro es ${perimetroparam}</h2>`);
        

    }

    area () {
        const arearect= (this.largo)*(this.ancho);
        document.write(`<h2>El area es ${arearect} </h2>`);
        
    
}
}
const figurarectangulo = new Rectangulo(5,3);
figurarectangulo.cambiarlargo();
figurarectangulo.cambiarancho();
figurarectangulo.perimetro();
figurarectangulo.area();
