
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

// Variável dentro da função só existe dentro do escopo
function teste(){
    var local = 123
}

teste()

console.log(local)

// Ao criar uma var no browser, essa variável estará disponível dentro do objeto window, ex. window.var