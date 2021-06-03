import { Component } from 'react'
import Main from '../template/Main'

import axios from 'axios'

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

// Para viabilizar o uso de Estados e método de ciclo de vida, foi extendido o Components
class UserCrud extends Component {

    state = { ...initialState }

    // clear não irá resetar a lista de usuário, só o formulário atual
    clear() {
        this.setState({ user: initialState.user })
    }

    // Será chamada quando o componente for ser exibido na tela
    componentWillMount() {
        // Chamada no back-end para obter a lista cadastrada. axios direto, sem os [],
        // utiliza o method padrão 'get'
        axios(baseUrl)
            .then(resp => {
                this.setState({
                    list: resp.data
                })
            })
    }

    // Será utilizado tanto para criar como atualizar usuário
    save() {
        // Desta forma estou pegando a referência, portanto é interessante não alterar
        // os dados, pois para alterar os dados do state é aconselhável utilizar o setState
        const user = this.state.user
        // Caso usuário que esteja sendo manipulado já possua um ID, significa que ele existe
        const method = user.id ? 'put' : 'post'

        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            // JSON Server já vai persistir os dados dentro do db.json e vai retornar esses dados
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user){
        // filter() gera outra lista, dessa forma está sendo clonada uma lista para list
        // removendo o usuário manipulado
        const list = this.state.list.filter(u => u.id !== user.id)
        // coloca o usuário alterado para a primeira posição
        list.unshift(user)
        return list
    }

    // Era possível criar uma função para cada campo
    updateField(event) {
        // Como o React trabalha de uma forma mais funcional, é interessante alterar um clone do
        // usuário antes de atualizar o estado utilizando setState, pois pode ser que de algum
        // problema durante o processo, e o estado fique corrompido
        const user = { ...this.state.user }
        // Dessa forma está sendo considerado que o name do field será o mesmo que o field do state
        // ex. user[email] => event.target.name = email
        user[event.target.name] = event.target.value
        this.setState ({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name" value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control"
                            name="email" value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o email..."/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={ e => this.save(e) }>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={ () => this.clear() }>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Atualiza o state.user com o user recebido
    load(user) {
        this.setState({ user })
    }

    // Remove usuário tanto do back-end quanto do front-end
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                // Remove o usuário da lista local
                const list = this.state.list.filter( u => u !== user )
                this.setState({ list })
            })
    }

    renderTable() {
        return <table className="table mt-4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}

export default UserCrud