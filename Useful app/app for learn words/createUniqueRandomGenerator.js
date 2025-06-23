function createUniqueRandomGenerator(max) {
    let usedNumbers = [];
    let availableNumbers = Array.from({ length: max }, (_, i) => i); // Генерация чисел от 1 до max
    return function(reset = false) {
        if (reset) {
            // Сброс: возвращаем все числа в доступные и очищаем использованные
            availableNumbers = [...usedNumbers];
            usedNumbers = [];
            return "Генератор сброшен, можно начинать заново.";
        }

        if (availableNumbers.length === 0) {
            return "Все числа исчерпаны. Используйте reset=true, чтобы начать заново.";
        }

        // Выбираем случайный индекс из доступных чисел
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const selectedNumber = availableNumbers[randomIndex];

        // Удаляем выбранное число из доступных и добавляем в использованные
        availableNumbers.splice(randomIndex, 1);
        usedNumbers.push(selectedNumber);

        return selectedNumber;
    };
}
