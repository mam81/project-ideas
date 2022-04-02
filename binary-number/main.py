number = input("Digite um numero em binário (0 ou 1): ")

def validacao_numero_binario(binaryNumber) -> bool:
    result = True
    if len(binaryNumber) > 8:
        result = False
    for i in binaryNumber:
        if int(i) != 0 and int(i) != 1:
            result = False
            
    return result

def conversao_binario_decimal(binaryNumber) -> int:
    numero_validado = validacao_numero_binario(binaryNumber)

    if numero_validado == False:
        return f"O número {binaryNumber} não representa um número binário (apenas 1's ou 0's e com no máximo 8 digítos)"
    else: 
        binaryNumber
        cont = 0
        soma = 0
        for i in range (len(binaryNumber)-1, -1, -1):
            soma += int(binaryNumber[i]) * (2 ** cont)
            cont += 1

    return soma
      
resultado = conversao_binario_decimal(number)
print(resultado)