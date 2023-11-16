class Cuenta {
  #saldo;
  constructor(
    Alex, 
    saldoparam) 
    {
    this.#saldo = saldoparam;
    this.titular = Alex;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevsaldo) {
    if (nuevsaldo >= 0) {
      this.#saldo = nuevsaldo;
      console.log(nuevsaldo);
    } else {
      alert("saldo insuficiente");
    }
  }

//metodos

ingresar(deposito){
  console.log(this.saldo);
  document.write(`<h2>${this.saldo}</h2>`)
  
 const nuevsaldo=deposito+nuevsaldo;

}

retirar(retiro){
    nuevsaldo=nuevsaldo-retiro;
    console.log(this.saldo);
}

informar(){
  document.write(`su saldo es ${this.#saldo}` )
}
}

Cuenta.ingresar(8);
Cuenta.retirar(8);

