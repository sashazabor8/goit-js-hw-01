'use strict';

let credits = 23580;
const pricePerDroid = 3000;

const quintity = prompt('Количество дроидов');
let totalPrice = quintity * pricePerDroid;

if (quintity === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    credits -= totalPrice;
    console.log(`Вы купили ${quintity} дроидов, на счету осталось ${credits} кредитов.'`);
}
