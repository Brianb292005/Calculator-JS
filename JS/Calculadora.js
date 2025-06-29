const txt1 = document.getElementById('caja1');
const txt2 = document.getElementById('caja2');
const operacion = document.getElementById('operacion');
const btn = document.getElementById('button');
const btn2 = document.getElementById('button2');
const p = document.querySelector('p');



btn.addEventListener('click', () => {
    const valor1 = caja1.value;
    const valor2 = caja2.value;
    const op = operacion.value;


    btn2.addEventListener('click', () => {
        txt1.value = '';
        txt2.value = '';
        operacion.value = '';
        p.textContent = 0;
    });


    if (valor1 === '' || valor2 === '') {
        p.textContent = 'Por favor, ingresa ambos números';
        return;
    }

    const num1 = Number(valor1);
    const num2 = Number(valor2);

    if (isNaN(num1) || isNaN(num2)) {
        p.textContent = 'Solo se permiten números';
        return;
    }

    let resultado;
    switch (op) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                p.textContent = 'No se puede dividir por cero';
                return;
            }
            resultado = num1 / num2;
            break;
    }
    p.textContent = resultado;
});






























