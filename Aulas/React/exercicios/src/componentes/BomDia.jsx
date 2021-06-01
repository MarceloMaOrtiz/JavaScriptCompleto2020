// Não devemos importar o React em arquivos '.jsx', a não ser que necessitamos de alguma
// função específica
// import { Fragment } from "react";

// props é utilizado por convenção. A priori não é possível enviar duas tags com um único
// componente, uma das possíbilidades é utilizar uma tag envolvendo outras tags. O React
// possui uma Tag específica para isso, que não será renderizada
// const render = (props) =>
//     <Fragment>
//     { /*<div> */ }
//         <h1>Bom dia {props.nome} !!</h1>
//         <p>Idade: {props.idade}</p>
//     { /*</div> */ }
//     </Fragment>


// Outra possibilidade é enviar as tags dentro de uma lista. Utilizado a lista de forma
// simples irá funcionar, mas teremos um Warning do 'react' pois a falta de 'key' gera
// uma dificuldade para o 'react'. Utilizando uma key é possível otimizar o load
const render = (props) => [
    <h1 key="h1">Bom Dia {props.nome} !!</h1>,
    <p key="p">Idade: {props.idade}</p>
]
export default render