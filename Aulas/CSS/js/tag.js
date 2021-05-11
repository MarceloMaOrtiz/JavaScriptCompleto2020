// Será utilizado esse JS para mostrar o nome das tags dentro do html, já que não existe algo no
// CSS para fazer isso

const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLocaleLowerCase()

    elemento.style.borderColor = colors.get(tagName)
    if (!elemento.classList.contains('noLabel')) { // classList mostra a lista de classes presentes no elemento
        const label = document.createElement('label') // Utilizada para criar uma Tag diretamente pelo JS
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        // Será inserido a label antes do primeiro elemento filho
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})