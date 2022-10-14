'use strict';

const admin_password = 'jqueryismyjam';
let message;

const userPassword = prompt('Введите пароль');

if (userPassword === null) {
    message = 'Отменено пользователем';
} else if (userPassword === admin_password) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
