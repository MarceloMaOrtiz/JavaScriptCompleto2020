// Exemplo de callback no browser

// Após registrar uma callback ela só vai ocorrer após o evento
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!')
}