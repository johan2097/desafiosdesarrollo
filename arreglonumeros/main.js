function sumaNumerosPares(array) {
    let sumaPares = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumaPares += array[i];
        }
    }
    return sumaPares;
}

function calcularSumaPares() {
   
    const numerosString = document.getElementById('numeros').value;
    
    const numerosArray = numerosString.split(',').map(Number);

    document.getElementById('resultado').innerText = 
    'La suma de los números pares es: ' + sumaNumerosPares(numerosArray);
}