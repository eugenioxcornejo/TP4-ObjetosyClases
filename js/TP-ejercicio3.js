class Rectangulo {
    constructor(
        largo,
        ancho,
    )

    this.largo = largoparam;
    this.ancho = anchoparam;

    cambiarlargo(largoparam){
        document.write(`<h2>El Largo es ${this.largo}</h2>`);
    }
    cambiarancho(anchoparam){
        document.write(`<h2>EL ancho es</h2>`);
    }

    perimetro(){
        perimetro=(2*(this.ancho+this.largo));
        document.write(`<h2>Elperimetro es ${perimetro}</h2>`);

    }

    area (){
        area= this.largo*this.ancho;
        document.write(`<h2>El area es ${area}</h2>`);
        
    }
}