const validar = require('./validadorcpf');

test('Deve testar um cpf válido', () => {

    const cpf = "93541134780";
    const isValid = validar.validarCPF(cpf);
    
    expect(isValid).toBeTruthy();
})

test('Deve testar um cpf inválido com os dígitos iguais', () => {

    const cpf = "111.111.111-11";
    const isValid = validar.validarCPF(cpf);
    expect(isValid).toBeFalsy();
})

test('Deve testar um cpf inválido com os dígitos diferentes', () => {

    const cpf = "123.456.789-99";
    const isValid = validar.validarCPF(cpf);
    expect(isValid).toBeFalsy();
})

test('Deve testar um cpf undefined', () => {

    const cpf = undefined;
    const isValid = validar.validarCPF(cpf);
    expect(isValid).toBeFalsy();
})

test('Deve testar um cpf inválido com caracteres', () => {

    const cpf = ".-";
    const isValid = validar.validarCPF(cpf);
    expect(isValid).toBeFalsy();
})
test('Deve testar um cpf com tamanho inválido', () => {

    const cpf = "123456";
    const isValid = validar.validarCPF(cpf);
    expect(isValid).toBeFalsy();
})