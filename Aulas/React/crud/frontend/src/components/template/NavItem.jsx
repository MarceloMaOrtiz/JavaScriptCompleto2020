import './NavItem.css'

import { Link } from 'react-router-dom'

function propsNavItem(props) {
    return <Link to={props.url}>
        <i className={`fa fa-${props.icon}`}></i> {props.item}
    </Link>
}

export default propsNavItem