
import React from 'react'
import Filho from './Filho'

import { childrenWithProps } from '../utils/utils'

// Esse exemplo foi para exemplificar de maneira simples como utilizar a herança
// dentro do Pai
const propsFunctionComFilho = props =>
    <div>
        <h1>{props.nome} {props.sobrenome} - Filhos dentro do 'Pai.jsx'</h1>
        <h2>Filhos</h2>
        <ul>
            {/*
                Nesse exemplo temos o filho herdando o sobrenome do pai
            */}
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            {/*
                Spread sendo utilizado para pegar todos os props e jogar como propriedades
                para o filho
            */}
            <Filho {...props} />
            {/*
                Spread sendo utilizado para pegar todos os props e jogar como propriedades
                para o filho, porém dessa vez está utilizando um nome diferente do pai.
                OBS: Caso enviar o {...props} depois do 'Carla', 'Carla será sobreescrita
            */}
            <Filho {...props} nome="Carla"/>
        </ul>
    </div>

const PropsFunctionPai = props => 
    <div>
        <h1>{props.nome} {props.sobrenome} - Filhos dentro do 'index.js'</h1>
        <h2>Filhos</h2>
        <ul>
            {/*
                Caso seja dentro de um contexto de classe, seria necessário utilizar
                this.props.children. esse exemplo abaixo não herdamos o sobrenome do pai
            */}
            {/* {props.children} */}
            {/*
                Primeiro utilizaremos React.cloneElement() para utilizar o sobrenome
                do pai quando for preencher os filhos. Lá no 'index.js', mantive somente
                um filho descomentado, para primeiro resolver o problema para um caso.
                No primeiro exemplo, o '...props' sobreescreveu inclusive o nome do filho.
                Portanto no segundo exemplo estamos enviando novamente as informações do filho.
                Ao descomentar as duas linhas, dos outros filhos, no 'index.js' obtivemos um erro,
                portanto para multiplos componentes essa abordagem não funciona, pois a função
                React.cloneElement(), recebe somente um element.
                Portanto no terceiro exemplo será utilizado o map, para percorrer todos os filhos
                aplicando a função React.Children.map com a React.cloneElement(). Diferentemente
                da função map para um Array, nessa é necessário passar a lista de elementos.
                Para finalizar, a última função comentada, que está funcionando, será colocada
                no arquivo 'utils.js' com o nome childrenWithProps(props)
            */}
            {/* {React.cloneElement(props.children, { ...props })} */}
            {/* {
                React.cloneElement(props.children, {
                    ...props, ...props.children.props
                })
            } */}
            {/* {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {
                        ...props, ...child.props
                    })
                })
            } */}
            { childrenWithProps(props) }
        </ul>
    </div>

export {PropsFunctionPai}

export default propsFunctionComFilho