function bubbleSort(arr) {
    let n = arr.length;
    // Проходим по всем элементам массива
    for (let i = 0; i < n; i++) {
        // Последние i элементов уже отсортированы
        for (let j = 0; j < n - i - 1; j++) {
            // Если текущий элемент больше следующего, меняем их местами
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Пример использования
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log("Отсортированный массив:", sortedNumbers);
