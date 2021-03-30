// 1 -
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// 0 retorna falso, obrigando a ser utilizado o 1
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

function soma2(a, b, c){
    // 2 - se ' a ' for extritamente diferente de undefined pega ' a ', se for undefined assume ' 1 '
    // se usar != também verifica o valor null
    a = a !== undefined ? a : 1
    // 3 - Se dentro de arguments existe o valor no índice 1 pega ' b ', se não pega 1
    b = 1 in arguments ? b : 1
    // 4 - Se ' c ' é um NaN então retorna 1, se não retorna ' c '.
    // Estratégia mais segura
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


// 5 - Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))