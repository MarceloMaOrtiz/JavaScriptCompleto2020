const wmFlappy = document.querySelector('[wm-flappy]')
console.log(wmFlappy)

// Criando a div interna para o bird
const birdDiv = document.createElement('div')
birdDiv.setAttribute('id', 'bird-box')

wmFlappy.appendChild(birdDiv)