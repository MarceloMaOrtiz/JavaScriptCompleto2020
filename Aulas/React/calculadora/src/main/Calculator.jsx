import React, { Component } from 'react'
// Será reconhecido pelo Webpack que trabalha por trás do react
import './Calculator.css'

import Button from '../components/Button'

import Display from '../components/Display'

// Constante para definir o estado inicial da calculadora
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    // Somente 2 values pois ao digitar uma operação a operação anterior, caso exista, é feita
    // e o resultado é armazenado no primeiro valor
    values: [0, 0],
    // Para saber se está sendo manipulado o values de indíce 0 ou 1
    current: 0
}

export default class Calculator extends Component {

    // Define o estado inicial da Calculator. state é uma existente em algum local, existindo de
    // antemão a função setState
    state = { ...initialState }

    // Existe a possibilidade de utilizar um constructor, jutamente com um bind ao invés
    // de utilizar arrow function para utilizar as funções abaixo, como no exemplo exercicios
    // Acredito ser uma forma mais clean de utilizar

    clearMemory() {

        // state já possui a função setState, nesse ponto está retornando para o estado inicial
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true})
        } else {
            const equal = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                // Eval novamente sendo utilizado, código perigoso, é possível mudar aqui para um
                // switch case
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
                console.log(e)
            }

            this.setState({
                displayValue: values[0],
                operation: equal ? null : operation,
                current: equal ? 0 : 1,
                clearDisplay: !equal,
                values
            })
        }
    }

    addDigit(digit) {
        // Caso o digit seja ' . ' e já exista um ' . ' no display, simplesmente return
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        // Sempre que temos somente um ' 0 ' no display e é digitado algum numero, é necessário
        // limpar o ' 0 ' antes de inserir o novo digit
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // Trata o problema comentado acima
        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + digit

        if (digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values ] // Clonando os values
            values[i] = newValue
            this.setState({ values })
        }

        // Atualizando o Estado da calculadora, como já foi verificado o clear, necessário setar
        // para false
        this.setState({
            displayValue,
            clearDisplay: false
        })

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
                {/* Dessa forma está sendo utilizado no display o estado da calculadora */}
                <Display value={this.state.displayValue}/>
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