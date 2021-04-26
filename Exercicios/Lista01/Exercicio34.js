// 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verifica_String(word1, word2){
    verifica = true
    for (let i = 0; i < word1.length; i++){
        character1 = word1.charAt(i).toLowerCase()
        for (let j = 0; j < word2.length; j++){
            character2 = word2.charAt(j).toLowerCase()
            if (character1 == character2){
                verifica = true
                break
            }
            else
                verifica = false
        }
        if (!verifica)
            return verifica
    }
    return verifica
}

console.log(verifica_String('aBc', 'bca'))
console.log(verifica_String('aBcsadf', 'basgasdfgwerqgasfgasfca'))
console.log(verifica_String('aBc', 'baa'))