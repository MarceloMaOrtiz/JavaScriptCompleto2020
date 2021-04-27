const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // Por padrão não é listado os atributos herdados
console.log(Object.keys(filha1.__proto__))
console.log(Object.keys(filha2))

for (let key in filha2){ // É diferente do Object.key, aqui aparece as chaves também herdadas
    console.log(key)
}

for (let key in filha2){
    filha2.hasOwnProperty(key) ? // Verifica se determinada informação pertence de fato ao próprio objeto
        console.log(key) : console.log(`Por Herança: ${key}`)
}