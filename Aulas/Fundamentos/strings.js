const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna nada quando não encontra, mas não da erro
console.log(escola.charCodeAt(4)) // Retorna o valor da tabela UNICODE
console.log(escola.indexOf('r'))

console.log(escola.substring(1)) // 1 até o final
console.log(escola.substring(0, 3)) // 0 até o 2, não inclui o 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log('3' + 2) // Concatena, pois string tem preferência
console.log(3 + '2') // Concatena, pois string tem preferência
console.log('3' - 2) // Subtrai, pois não consegue trabalhar como string

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // /\d/ é um expressão regular, substituirá o primeiro digito
console.log(escola.replace(/\w/g, '@')) // /\w/g é um expressão regular, substituirá tudo pela letra '@'. g = Global

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // /,/ expressão regular
console.log('Ana,Maria,Pedro'.split(/./)) // /./ expressão regular, Não sei o que /./ faz
