export function romanToInteger(roman) {
    // Словарь значений римских цифр
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = map[roman[i]];
        const next = map[roman[i + 1]];

        // Если текущая цифра меньше следующей, значит она вычитается (например, IV, IX, XL)
        if (next && current < next) {
            result -= current;
        } else {
            // Иначе просто прибавляем
            result += current;
        }
    }

    return result;
}
