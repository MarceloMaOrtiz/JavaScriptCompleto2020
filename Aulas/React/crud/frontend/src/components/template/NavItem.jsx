import './NavItem.css'

function propsNavItem(props) {
    return <a href={props.url}>
        <i className={`fa fa-${props.icon}`}></i> {props.item}
    </a>
}

export default propsNavItem