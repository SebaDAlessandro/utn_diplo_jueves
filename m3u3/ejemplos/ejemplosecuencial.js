
    const valor1 = prompt('Ingrese primer número:', '');
    const valor2 = prompt('Ingrese segundo número', '');

    const suma = parseInt(valor1) + parseInt(valor2);
    //el parseInt convierte los valores de texto a numeros
    //si esto no se realiza, los valores se concatenan  
    const producto = valor1 * valor2;

    console.log('La suma es ' + suma)
    console.log(`La suma es ${suma} y el producto es ${producto}`)
    document.write(`La suma es ${suma} y el producto es ${producto}`)