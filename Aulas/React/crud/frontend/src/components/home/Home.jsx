import Main from '../template/Main'

function propsHome(props) {
    return <Main icon="home" title="Ínicio" subtitle="Segundo projeto no capítulo de React.">
        <div className='display-4'>Bem Vindo!!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em react</p>
    </Main>
}

export default propsHome