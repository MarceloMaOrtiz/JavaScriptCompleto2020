const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// é utilizada a Cráse para abrir um templateString, considerando qualquer tipo de espaço (Tab, Enter)
const template = `
Olá
    ${nome}!
`

console.log(concatenacao)
console.log(template)

// expressoes...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!!!`)