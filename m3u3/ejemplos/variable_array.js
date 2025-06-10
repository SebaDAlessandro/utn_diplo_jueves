		const frutas = ["Manzana", "Banana", "Pera", "Sandia"];

		console.log(frutas.length);
		console.log(frutas); // 2
		
		const primero = frutas[0]; //manzana
		
		const ultimo = frutas[frutas.length-1]; // siempre es el ultimo

		const vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];
		
		console.log(vegetales);  // ["Repollo", "Nabo", "Rábano", "Zanahoria"]
		
		const seleccionado = 2;
		console.log(vegetales[seleccionado]);
		
		seleccionado = 1;
		console.log(vegetales[seleccionado]);
		
		for( let i = 0; i < vegetales.length; i++){
			console.log('tenemos ' + vegetales[i])
		}
		