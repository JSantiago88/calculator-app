
export const getResult = (initialValue = []) => {

    let arr = initialValue.join('')
        .replaceAll('.', '')
        .replaceAll(",", ".");

    let digits = [];
    for (let i = 0, j = 0; i < arr.length; i++) {

        if (isNaN(parseFloat(arr.charAt(i))) && arr.charAt(i) !== '.') {

            digits.push(parseFloat(arr.slice(j, i)));
            digits.push(arr.slice(i, i + 1));
            j = i + 1;
        } else if (i === arr.length - 1) {
            digits.push(parseFloat(arr.slice(j, i + 1)));
        }
    }

    if (isNaN(digits[digits.length - 1])) {
        digits.pop();
    }

    const calculate = (digits) => {
        let stackOperators = [];
        let stackAux = [];
        let total = 0;
        let flag = true;
        let result = 0;
        for (let i = 0; i < digits.length; i++) {
            flag = true;

            if (!isNaN(digits[i])) {

                if (isNaN(digits[i + 1])) {
                    result = 0;
                    if (digits[i + 1] !== undefined) {

                        if (stackOperators[stackOperators.length - 1] !== undefined) {

                            const stOperator = stackOperators[stackOperators.length - 1];

                            if ((stOperator === '+' || stOperator === '-') && (digits[i + 1] === '+' || digits[i + 1] === '-')) {

                                if (stOperator === '+') { // step
                                    result = total + digits[i];
                                } else {
                                    result = total - digits[i];
                                }

                                flag = false;
                                stackOperators.pop();
                            } else {

                                if (stOperator === 'x' || stOperator === '/') {// step

                                    if (stOperator === 'x') {
                                        result = total * digits[i];
                                    } else {
                                        result = total / digits[i];
                                    }

                                    flag = false;
                                    stackOperators.pop();
                                } else {
                                    stackAux.push(total);
                                }
                            }
                        }

                        stackOperators.push(digits[i + 1]);

                        if (flag) { // step
                            total = digits[i];
                        } else {
                            total = result;
                        }

                        i++;
                        if (digits.length > i) {
                            continue;
                        }
                    } else {

                        if (digits[i - 1] === '+') {
                            total += digits[i];
                        } else if (digits[i - 1] === '-') {
                            total -= digits[i];
                        } else if (digits[i - 1] === 'x') {
                            total *= digits[i];
                        } else if (digits[i - 1] === '/') {
                            total /= digits[i];
                        }
                        stackOperators.pop();
                    }

                    let valueOperator;
                    let valueNumber;
                    while (stackAux.length > 0) { // step
                        valueOperator = stackOperators[stackOperators.length - 1];
                        valueNumber = stackAux[stackAux.length - 1];

                        if (valueOperator === '+') {
                            total = valueNumber + total;
                        } else if (valueOperator === '-') {
                            total = valueNumber - total;
                        } else if (valueOperator === 'x') {
                            total = valueNumber * total;
                        } else if (valueOperator === '/') {
                            total = valueNumber / total;
                        }

                        stackOperators.pop()
                        stackAux.pop()
                    }
                }
            }
        }

        return [
            total.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".").includes('e') ?
                'error' :
                total.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        ];
    }

    return calculate(digits);
};