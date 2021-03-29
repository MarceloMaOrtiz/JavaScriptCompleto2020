const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Break não haje em um bloco if

for(x in nums) {
    if (x == 5)
        break
    console.log(`${x} = ${nums[x]}`)
}

console.log('')

// Continue não haje em um bloco if
// Interrompe o laço atual e vai para o próximo

for(y in nums) {
    if (y == 5)
        continue
    console.log(`${y} = ${nums[y]}`)
}

// rótulo
externo: for(a in nums) {
    for(b in nums) {
        if (a == 2 && b == 3)
            // break
            break externo // Ao invés de sair do for interno sairá do interno
        console.log(`Par = ${a}, ${b}`)
    }
}

