// Temos de forma mais detalhada a variável global, que similarmente no browse temos o window
// console.log(global)

// Quando exportamos um modulo, tudo que existia dentro do objeto global, também estará disponível
// no lugar importado -> Evitar ao máximo essa utilização, a ideia é utilizar da melhor forma os módulos

global.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})