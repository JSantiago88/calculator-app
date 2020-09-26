
export const getResult = (initialValue = []) => {

    const calculate = (digits = []) => {
        let stackOperators = [];
        let stackAux = [];
        let total = 0;
        let flag = true;
        let result = 0;
        for (let i = 0; i < digits.length; i++) {
            flag = true;

            if (!isNaN(digits[i])) {

                if (isNaN(digits[i + 1]) && digits[i + 1] !== undefined) {
                    result = 0;
                   
                    if (stackOperators[stackOperators.length - 1] !== undefined) {

                        const stOperator = stackOperators[stackOperators.length - 1];

                        if ((stOperator === '+' || stOperator === '-') && (digits[i + 1] === '+' || digits[i + 1] === '-')) {

                            if (stOperator === '+') {
                                result = total + digits[i];
                            } else {
                                result = total - digits[i];
                            }

                            flag = false;
                            stackOperators.pop();
                        } else if (stOperator === 'x' || stOperator === '/') {

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

                    stackOperators.push(digits[i + 1]);

                    if (flag) {
                        total = digits[i];
                    } else {
                        total = result;
                    }

                    i++;
                    if (digits.length > i) {
                        continue;
                    }
                    
                } else {

                    total = digits[i - 1] === '+' ? total + digits[i] :
                            digits[i - 1] === '-' ? total - digits[i] :
                            digits[i - 1] === 'x' ? total * digits[i] :
                            digits[i - 1] === '/' ? total / digits[i] :
                            total;

                    stackOperators.pop();
                }

                total = execPendingOperations(stackAux, stackOperators, total);
            }
        }

        return [
            amountFormat(total)
        ];
    };

    const joinDigitsToString = (initialValue) => {
        return initialValue.join('')
            .replaceAll('.', '')
            .replaceAll(",", ".");
    };

    const formatChainDigitsToArr = (chainDigits) => {
        const result = [];
        for (let i = 0, j = 0; i < chainDigits.length; i++) {

            if (isNaN(parseFloat(chainDigits.charAt(i))) && chainDigits.charAt(i) !== '.') {

                result.push(parseFloat(chainDigits.slice(j, i)));
                result.push(chainDigits.slice(i, i + 1));
                j = i + 1;
            } else if (i === chainDigits.length - 1) {
                result.push(parseFloat(chainDigits.slice(j, i + 1)));
            }
        }
        return result;
    };
    
    const cleanLastOperator = (digits) => {
        if (isNaN(digits[digits.length - 1])) {
            digits.pop();
        }
        return digits;
    };

    const execPendingOperations = (stackAux = [], stackOperators, total) => {
        let valueOperator;
        let valueNumber;

        while (stackAux.length > 0) {
            valueOperator = stackOperators[stackOperators.length - 1];
            valueNumber = stackAux[stackAux.length - 1];

            total = valueOperator === '+' ? valueNumber + total :
                    valueOperator === '-' ? valueNumber - total :
                    valueOperator === 'x' ? valueNumber * total :
                    valueOperator === '/' ? valueNumber / total :
                    total;

            stackOperators.pop()
            stackAux.pop()
        }
        return total;
    };

    const amountFormat = (total = 0) => {

        const rExpresion = /\B(?=(\d{3})+(?!\d))/g;

        const _amountFormat = (total) => {
            return total.toFixed(2)
                .replace('.', ',')
                .replace(rExpresion, ".");
        };

        return _amountFormat(total).includes('e') ? 'error' : _amountFormat(total);
    };

    const digits = cleanLastOperator(
        formatChainDigitsToArr(
            joinDigitsToString(initialValue)
        ));

    return calculate(digits);
};