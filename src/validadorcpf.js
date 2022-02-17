const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

exports.validarCPF = function (cpfcnpj) {
    if (!cpfcnpj) return false
    cpfcnpj = removerCaracteres(cpfcnpj)
    if (!cpfcnpj) return false
    if (!isValidaLength(cpfcnpj)) return false;
    if (hasAllDigitsEqual(cpfcnpj)) return false;
    const digit1 = calculateCheckDigit(cpfcnpj, FACTOR_DIGIT_1);
    const digit2 = calculateCheckDigit(cpfcnpj, FACTOR_DIGIT_2);
    let checkDigit = extractCheckDigit(cpfcnpj);
    const calculatedDigit = `${digit1}${digit2}`;
    return checkDigit == calculatedDigit;
}

function removerCaracteres(cpfcnpj) {
    return cpfcnpj.replace(/[\.\-]/g, "");
}

function isValidaLength(cpfcnpj) {
    return cpfcnpj.length === 11;
}

const hasAllDigitsEqual = function (cpfcnpj) {
    const [firstDigit] = cpfcnpj;
    return [...cpfcnpj].every(digit => digit === firstDigit);
}

const calculateCheckDigit = function (cpfcnpj, factor) {
    let total = 0;
    for (const digit of cpfcnpj) {
        if (factor > 1) total += digit * factor--;
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}
const extractCheckDigit = function (cpfcnpj) {

    return cpfcnpj.slice(-2)
}