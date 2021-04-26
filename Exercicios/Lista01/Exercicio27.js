// 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function compara_Altura(altura1, cresc1, altura2, cresc2) {
    if (altura1 == altura2){
        console.log('As duas crianças possuem o mesmo tamanho')
        return -1
    }
    if (altura1 > altura2){
        altura1 = [altura2, altura2 = altura1][0]
        cresc1 = [cresc2, cresc2 = cresc1][0]
    }
    if (cresc1 > cresc2){
        tempo = (altura2 - altura1)/(cresc1 - cresc2)
        console.log(`Existe uma criança menor, ela ultrapassará a maior em ${tempo} anos`)
    }
    else
        console.log('Existe uma criança menor, mas ela nunca ultrapassará a maior')
}

compara_Altura(43, 2, 45, 3)
compara_Altura(43, 3, 45, 2)

compara_Altura(37, 4, 45, 2)
compara_Altura(45, 4, 37, 2)