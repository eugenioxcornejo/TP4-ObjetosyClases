class Rectangulo {
    constructor(
        largoparam,
        anchoparam,
    )
    {

    this.largo = largoparam;
    this.ancho = anchoparam;
    }
    cambiarlargo(){
        console.log(`${this.largo}`)
        document.write(`<h2>El Largo es ${this.largo}</h2>`);
    }
    cambiarancho(){
        document.write(`<h2>EL ancho es</h2>`);
    }

    perimetro(){
        perimetro=(2*(this.ancho+this.largo));
        document.write(`<h2>Elperimetro es ${perimetro}</h2>`);

    }

    area (){
        arearect= (this.largo)*(this.ancho);
        document.write(`<h2>El area es ${arearect} </h2>`);
        
    }
}
const figurarectangulo = new Rectangulo(5,3);
console.log(figurarectangulo);
document.write(`${figurarectangulo.area}`)

