// É possível captarmos as option quando executarmos, por exemplo, node entradaESaida.js -option no prompt

const anonimo = process.argv.indexOf('-a') !== -1 // Diferente de -1, ou seja, se estiver presente na lista de argumentos retorna verdadeiro

console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônima!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // Esse evento para após a utilização do 'Enter' -- O 'Enter' também é captado no stdin
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}