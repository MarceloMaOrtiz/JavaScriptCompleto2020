import './Header.css'

function propsHeader(props) {
    return <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            {/* fa -> font-awesome */ }
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
}

export default propsHeader