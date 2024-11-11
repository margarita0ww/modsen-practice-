function calculateDensity(numbers) {
    // Определяем длину массива
    const halfLength = Math.floor(numbers.length / 2);
    
    // Получаем первую половину массива
    const firstHalf = numbers.slice(0, halfLength);
    
    // Вычисляем сумму элементов первой половины
    const sum = firstHalf.reduce((acc, num) => acc + num, 0);
    
    // Если первая половина пуста, возвращаем 0, иначе рассчитываем плотность
    return firstHalf.length > 0 ? sum / firstHalf.length : 0;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5, 6];
const density = calculateDensity(numbers);
console.log(density); // Выведет: 2
