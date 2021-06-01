import React, { Component } from 'react'
// Será reconhecido pelo Webpack que trabalha por trás do react
import './Calculator.css'

import Button from '../components/Button'

import Display from '../components/Display'

export default class Calculator extends Component {

    // Existe a possibilidade de utilizar um constructor, jutamente com um bind ao invés
    // de utilizar arrow function para utilizar as funções abaixo, como no exemplo exercicios
    // Acredito ser uma forma mais clean de utilizar

    clearMemory() {
        console.log('Limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(digit) {
        console.log(digit)
    }

    render() {
        // Esse this por está utilizando uma Arrow Function, está utilizando o elemento da classe
        const addDigit = n => this.addDigit(n)
        const setOperation = n => this.setOperation(n)
        const clearMemory = () => this.clearMemory()
        return (
            // No JSX diferentemente do CSS, utiliza-se 'className' ao invés de 'class', pois
            // em algum momento o className será convertido para Class, foi feito um teste para
            // utilizar uma class, para tentar evitar a necessidade de tratar os params no button.jsx,
            // mas não funcionou, pois quando chega lá, e o className utiliza o botton, a class envianda
            // anteriormente é sobreescrita
            <div className="calculator">
                <Display value="100"/>
                <Button label="AC" click={ clearMemory } triple></Button>
                <Button label="/" click={ setOperation } operation></Button>
                <Button label="7" click={ addDigit }></Button>
                <Button label="8" click={ addDigit }></Button>
                <Button label="9" click={ addDigit }></Button>
                <Button label="*" click={ setOperation } operation></Button>
                <Button label="4" click={ addDigit }></Button>
                <Button label="5" click={ addDigit }></Button>
                <Button label="6" click={ addDigit }></Button>
                <Button label="-" click={ setOperation } operation></Button>
                <Button label="1" click={ addDigit }></Button>
                <Button label="2" click={ addDigit }></Button>
                <Button label="3" click={ addDigit }></Button>
                <Button label="+" click={ setOperation } operation></Button>
                <Button label="0" click={ addDigit } double></Button>
                <Button label="." click={ addDigit }></Button>
                <Button label="=" click={ setOperation } operation></Button>
            </div>
        )
    }
}