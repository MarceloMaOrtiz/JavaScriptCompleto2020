import { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

// Para viabilizar o uso de Estados e método de ciclo de vida, foi extendido o Components
class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}></Main>
        )
    }
}

export default UserCrud