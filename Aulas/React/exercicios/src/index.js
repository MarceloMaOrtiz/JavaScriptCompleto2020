// Inicialmente a 'home' do servidor está executando o '/public/index.html

import React from 'react'
import ReactDOM from 'react-dom'

// Não é possível criar componentes com letra minúscula, podemos alterar o nome do Primeiro
// para Blabla, mas para blabla não será renderizado. Os arquivos referentes aos componentes
// também serão escritos por letra maiusculas, mas isso não é obrigatório.
// import Primeiro from './componentes/Primeiro'

import BomDia from './componentes/BomDia'

import Multi, { BoaTarde, BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai, { PropsFunctionPai } from './componentes/Pai'

import Filho from './componentes/Filho'

// Será utilizada a função para renderizar o primeiro elemento da página
// OBS: Estamos dentro de um JS, mas enviamos algo parecido com HTML. Quem permite fazer com
// que isso funcione é a sintaxe JSX do React. Está sendo utilizado um Traspile (Conversão).
// É algo parecido com $('<h1>').html('React').
// React possui funções internar para manipular o DOM, adicionar elementos, atualizar determinado
// atributo
// A partir do momento que é utilizado o '<h1>React</h1>' a dependência do React importada é
// utilizada para ser possivel a utilização do JSX
// ReactDOM.render(<h1>React</h1>, document.getElementById('root')) // Id presente no 'index.html'

// JSX precisa obrigatoriamente de fechar as tags, diferentemente do HTML

// Utilizando dessa forma o conteúdo presente no componenete Primeiro é renderizado
// ReactDOM.render(< Primeiro />, document.getElementById('root')) // Id presente no 'index.html'

// Renderizando o BomDia. Vale notar então que o '< Primeiro />' utilizado acima é a Tag e não o
// conteúdo da Tag.
ReactDOM.render(<BomDia nome="Marcelo" idade={10}></BomDia>, document.getElementById('root')) // Id presente no 'index.html'

ReactDOM.render(
    <div>
        <BoaTarde nome="Marcelo"></BoaTarde>
        <BoaNoite nome="Marcelo"></BoaNoite>
        <Multi.BoaMadrugada />
        <Multi.Adeus nome="Marcelo" />    
    </div>,
    document.getElementById('root2')
) // Id presente no 'index.html'

ReactDOM.render(
    <React.Fragment>
          <Saudacao tipo="Bom Dia" nome="Marcelo"></Saudacao>
    </React.Fragment>,
    document.getElementById('root3')
) // Id presente no 'index.html'

ReactDOM.render(
    <React.Fragment>
          <Pai nome="Gustavo" sobrenome="Ortiz"></Pai>
    </React.Fragment>,
    document.getElementById('root4')
) // Id presente no 'index.html'

ReactDOM.render(
    <React.Fragment>
          <PropsFunctionPai nome="Gustavo" sobrenome="Ortiz">
              <Filho nome="Carla"/>
              <Filho nome="Gustavo"/>
              <Filho nome="Pedro"/>
          </PropsFunctionPai>
    </React.Fragment>,
    document.getElementById('root5')
) // Id presente no 'index.html'