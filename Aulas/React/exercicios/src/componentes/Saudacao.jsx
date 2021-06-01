import { Component } from 'react'

// Como Saudacao está extendendo um Component, Saudacao é um Component.
// Toda propriedade (props) recebida a partir da utilização do componente é Read-Only,
// portanto não é possível setar o seu valor. A solução nesse caso é utilizar
// state (estado)
class Saudacao extends Component {

    // state representa o objeto que está sendo trabalhado no momento
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        // É necessário passar o props para a super classe, pois sem passar, não conseguiriamos
        // utilizar o props do state acima, mesma herdando Component. Vale ressaltar que o componente
        // já possui o props, por isso é passado
        super(props)

        // Sem as duas linhas abaixo, o this do setTipo e setNome serão undefineds
        // Dessa forma estamos amarrando o this a função setTipo
        this.setTipo = this.setTipo.bind(this)
        // Dessa forma estamos amarrando o this a função setNome
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        // Exemplificando o conceito de Estado como Verdade Absoluta, ou seja, para a visualização
        // ser alterada, o Estado precisa ser alterado antes.
        // let i = 1
        // setInterval(() => {
        //     this.setState({
        //         tipo: i++
        //     })
        // }, 1000)

        this.setState({
            tipo: e.target.value
        })
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    render() {
        // Destructuring 'tipo' e 'nome' de dentro de props (proprieties)
        // const { tipo, nome } = this.props
        // Alterando o Destructuring para obter os dados a partir do state
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                {/* 
                    Com o 'value={}' não é possível alterar o valor dentro do input,
                    ao alterar o value para defaultValue, já é possível fazer a alteração.
                    Mas ainda não está sendo tratado o evento da digitação, para isso é
                    necessário adicionar o evento onChange(). Vale ressaltar a necessidade
                    de utilizar o this para utilizar a função, já que a mesma pertence ao this, como é
                    um arrow function, o this pertece ao parent, que nesse caso é a Saudação e não o evento
                */}
                {/* 
                <input type="text" placeholder="Tipo..." defaultValue={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." defaultValue={nome} onChange={e => this.setNome(e)} />
                */}
                {/*
                    Iremos mudar a forma de passar a função para o onChange, nesse caso iremos passar só a função
                    ao invés de chama-la e retornar o resultado como anteriormente. Já nesse caso temos o this
                    não sendo reconhecido como a Saudação. Para arrumar será utilizado a função Bind no contructor,
                    cujo objetivo é amarrar o this do objeto a função
                */}
                <input type="text" placeholder="Tipo..." defaultValue={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." defaultValue={nome} onChange={this.setNome} />
            </div>
        )
    }
}

export default Saudacao