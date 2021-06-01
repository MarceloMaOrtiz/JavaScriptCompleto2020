
export const BoaTarde = (props) => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = (props) => <h1>Boa Noite {props.nome}!</h1>

const BoaMadrugada = () => <h1>Boa Madrugada!</h1>

const Adeus = (props) => <h1>Adeus { props.nome } !!</h1>

const exportsFunctions = { BoaMadrugada, Adeus }

export default exportsFunctions