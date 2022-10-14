'use strict';

let total = 0;

for (let i = 0; i < 1; i -= 1) {
    let input = prompt('Введи число');

    if (input === null) {
        break;
    }

    input = Number(input);

    const isNotNumber = Number.isNaN(input);

    if (isNotNumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += input;
}
alert(`Общая сумма ${total}`);
