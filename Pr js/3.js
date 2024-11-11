function printLastCharacter(line) {
    if (line.length > 0) {
        console.log(line[line.length - 1]);
    } else {
        console.log('Строка пуста');
    }
}

// Пример использования
printLastCharacter("Привет"); // Выведет: т
printLastCharacter(" "); // Выведет:  
printLastCharacter(""); // Выведет: Строка пуста
