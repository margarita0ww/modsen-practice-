"use strict";

// Объявление переменной с помощью var
var name = "Alice";
console.log(name); // Alice

// Повторное объявление с помощью var
var name = "Bob";
console.log(name); // Bob

// Объявление переменной с помощью let
let age = 25;
console.log(age); // 25

// Попытка повторного объявления с помощью let
// let age = 30; // Это вызовет ошибку: Identifier 'age' has already been declared

// Объявление переменной с помощью const
const city = "New York";
console.log(city); // New York

// Попытка повторного объявления с помощью const
// const city = "Los Angeles"; // Это вызовет ошибку: Identifier 'city' has already been declared

// Попытка изменить значение переменной, объявленной с const
// city = "Los Angeles"; // Это вызовет ошибку: Assignment to constant variable.
