const cuenta = {

    titular: 'Alex',
    saldo: 0,


    ingresar: function(deposito){
        const saldoactualdeposito = deposito + this.saldo;
        console.log(saldoactualdeposito);
        return saldoactualdeposito;
        },
    extraer: function(retiro){
        const saldoactualretiro = this.saldo - retiro;
        console.log(saldoactualretiro);
        return saldoactualretiro;
    },
    informar: function(){
        
        document.write(`Su saldo es ${this.saldo}`)
    }    
    }

    const montodepositado = prompt(`ingrese el monto a depositar`);

    cuenta.ingresar(montodepositado);
    

    const montoretirado = prompt(`ingrese el monto a retirar`);
    cuenta.extraer(montoretirado);
    

    cuenta.informar();
