const cuenta = {

    titular: 'Alex',
    saldo: parseFloat(0),


    ingresar: function(deposito){
        const saldoactualdeposito = (parseFloat(deposito) + this.saldo);
        console.log(saldoactualdeposito);
        return parseFloat(saldoactualdeposito);
        },
    extraer: function(retiro){
        const saldoactualretiro = parseInt(this.saldo - parseFloat(retiro));
        console.log(saldoactualretiro);
        return parseFloat(saldoactualretiro);
    },
    informar: function(){
        

        document.write(`${this.titular} su saldo es ${this.saldo}`);
    }    
    }

    const montodepositado = prompt(`ingrese el monto a depositar`);

    cuenta.ingresar(montodepositado);
    

    const montoretirado = prompt(`ingrese el monto a retirar`);
    cuenta.extraer(montoretirado);
    

    cuenta.informar();
