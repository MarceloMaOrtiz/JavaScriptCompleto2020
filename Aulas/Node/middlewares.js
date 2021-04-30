// Middlewares pattern (Chain of Responsabilities)
const passo1 = (ctx, next) => { // ctx = contexto = são os objetos
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor = 'mid3'

const exec = (ctx, ...middlewares) => { // A ideia do ...midlewares é ter um array de funções
    const execPasso = indice => {
        // Dessa forma ele vai verificando e executando em seguida, portanto se alguma dessas verificações for false
        // não temos a última função sendo executada
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1)) 
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)

const ctx2 = {}
exec(ctx2, passo2, passo1, passo3)

console.log(ctx2)

const ctx3 = {}
exec(ctx3, passo3, passo1, passo2) // Para, pois no passo3 não temos a chamda da função next()

console.log(ctx3)