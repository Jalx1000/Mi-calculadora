class Display {
	constructor(displayValorAnterior,displayValorActual){
		this.displayValorActual = displayValorActual;
		this.displayValorAnterior = displayValorAnterior;
		this.calculador = new Calculadora();
		this.valorActual = '';
		this.valorAnterior = '';
	}

	borrar(){
		this.valorActual = this.valorActual.toString().slice(o,-1);
		this.imprimirValores;
	}

	agregarNumero(numero){
		if (numero == '.' && this.valorActual.includes('.')) return 
		this.valorActual = this.valorActual.toString() + numero.toString;
		this.imprimirValores();
	}

	imprimirValores(){
		this.displayvalorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = this.valorAnterior;
		
	}
	
	 calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
