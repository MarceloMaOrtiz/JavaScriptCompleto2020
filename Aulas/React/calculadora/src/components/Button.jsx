
import './Button.css'

const propsButton = props => {
    return <button 
        // Dessa forma está sendo passado para a função click o valor do botão
        onClick={() => props.click(props.label)}
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
        {props.label}
    </button>
}

export default propsButton